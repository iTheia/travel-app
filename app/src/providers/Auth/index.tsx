import React, { createContext, useState, useEffect, useContext } from 'react';
import { IAuthContext, ILogIn, ISignUp } from './types';
import { AppContext } from '../App';
import { url, IUser } from '../../constant';
import JwtDecode from 'jwt-decode';
import Axios, { AxiosResponse } from 'axios';

export const AuthContext = createContext<IAuthContext>({
	currentUser: false,
	logIn: async (_: ILogIn) => {},
	getToken: () => '',
	logOut: async () => {},
	signUp: async (_: ISignUp) => {},
});

export const AuthProvider: React.FC = ({ children }) => {
	const [currentUser, setCurrentUser] = useState<IUser | false | null>(false);
	const [error, setError] = useState('');
	const [token, setToken] = useState<string>('');
	const { setIsLoading } = useContext(AppContext);

	const setSession = (response: AxiosResponse<any>) => {
		try {
			const { data } = response;
			if (data.error) {
				throw new Error(data.error.message);
			}
			const decoded = JwtDecode(data.accessToken) as IUser;
			setCurrentUser((prev) => ({ ...prev, ...decoded }));
			setToken(data.accessToken);
			setError('');
		} catch (error) {
			setError('');
		}
	};
	const signUp = async (values: ISignUp) => {
		try {
			const response = await Axios.post(
				`${url}auth/mobile/signup`,
				values
			);
			setSession(response);
		} catch (error) {
			alert(error);
		}
	};

	const logOut = async () => {
		try {
			const response = await Axios.get(`${url}auth/mobile/close`);
			setSession(response);
		} catch (error) {
			alert(error);
		}
	};
	const logIn = async (values: ILogIn) => {
		try {
			const response = await Axios.post(
				`${url}auth/mobile/login`,
				values
			);
			setSession(response);
		} catch (error) {
			alert(error);
		}
	};
	const getToken = () => {
		if (token === '') {
			return 'Bearrer ""';
		}
		const { exp } = JwtDecode(token) as any;
		if (exp < Date.now().valueOf() / 1000) {
			fetch(`${url}/api/v1/auth/refresh/mobile`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
			})
				.then(async (response) => {
					const data = await response.json();
					setSession(data);
				})
				.catch(() => {
					setToken('');
					setCurrentUser(false);
				});
		}
		return `Bearrer ${token}`;
	};
	useEffect(() => {
		setIsLoading(true);
		setCurrentUser({
			avatar: '',
			role: 'expert',
			username: 'asd',
			id: 1,
		});
		setIsLoading(false);
	}, [setIsLoading]);
	return (
		<AuthContext.Provider
			value={{ currentUser, getToken, logIn, logOut, signUp }}
		>
			{children}
		</AuthContext.Provider>
	);
};
