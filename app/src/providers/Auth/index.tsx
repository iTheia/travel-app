import React, { createContext, useState, useEffect, useContext } from "react";
import { IAuthContext, ILogIn, ISignUp } from "./types";
import { AppContext } from "../App";
import { url, IUser } from "../../constant";
import JwtDecode from "jwt-decode";
import Axios, { AxiosResponse } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext<IAuthContext>({
    currentUser: false,
    logIn: async (_: ILogIn) => {},
    getToken: async () => "",
    logOut: async () => {},
    signUp: async (_: ISignUp) => {},
});

export const AuthProvider: React.FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<IUser | false | null>(false);
    const [token, setToken] = useState<string>("");
    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {
        setIsLoading(true);
        AsyncStorage.getItem("refreshToken")
            .then((refreshToken) => {
                if (refreshToken === null) throw new Error("error");
                Axios.get(`${url}/api/v1/auth/mobile/current`, {
                    headers: { refreshToken },
                })
                    .then((response) => setSession(response))
                    .catch((error) => console.log(error));
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }, [setIsLoading]);

    async function signUp(values: ISignUp) {
        try {
            const response = await Axios.post(
                `${url}/api/v1/auth/mobile/signup`,
                values
            );
            setSession(response);
        } catch (error) {
            alert(error);
        }
    }

    async function logOut() {
        try {
            await Axios.get(`${url}/api/v1/auth/mobile/close`);
            setToken("");
            await AsyncStorage.setItem("refreshToken", "");
            setCurrentUser(false);
        } catch (error) {
            alert(error);
        }
    }
    async function logIn(values: ILogIn) {
        try {
            const response = await Axios.post(
                `${url}/api/v1/auth/mobile/login`,
                values
            );
            setSession(response);
        } catch (error) {
            alert(error);
        }
    }
    async function getToken() {
        if (token === "") {
            return "Bearrer ";
        }
        const { exp } = JwtDecode(token) as any;
        if (exp < Date.now().valueOf() / 1000) {
            const refreshToken = await AsyncStorage.getItem("refreshToken");
            Axios.get(`${url}/api/v1/auth/mobile/refresh`, {
                headers: {
                    refreshToken: refreshToken || "",
                },
            })
                .then((response) => setSession(response))
                .catch(() => {
                    setToken("");
                    setCurrentUser(false);
                });
        }
        return `Bearrer ${token}`;
    }
    async function setSession(response: AxiosResponse<any>) {
        try {
            const { data } = response;
            if (data.error) {
                throw new Error(data.error.message);
            }
            const decoded = JwtDecode(data.accessToken) as IUser;
            setCurrentUser((prev) => ({ ...prev, ...decoded }));
            setToken(data.accessToken);
            await AsyncStorage.setItem("refreshToken", data.refreshToken);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }
    return (
        <AuthContext.Provider
            value={{ currentUser, getToken, logIn, logOut, signUp }}
        >
            {children}
        </AuthContext.Provider>
    );
};
