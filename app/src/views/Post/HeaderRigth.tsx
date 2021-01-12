import { MaterialCommunityIcons } from "@expo/vector-icons";
import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { url } from "../../constant";
import { AuthContext } from "../../providers/Auth";

export default function HeaderRigth({ id }: { id: number }) {
    const [userFav, setUserFav] = useState<boolean>(false);
    const { getToken } = useContext(AuthContext);
    useEffect(() => {
        getToken().then((token) => {
            Axios.get(`${url}/api/v1/users/isFavorite/${id}`, {
                headers: { authorization: token },
            })
                .then((response) => {
                    if (response.data.error) {
                        throw new Error("");
                    }
                    setUserFav(response.data);
                })
                .catch((err) => console.log(err));
        });
    });

    async function addFav() {
        try {
            const token = await getToken();
            await Axios.get(`${url}/api/v1/users/addFavorite/${id}`, {
                headers: { authorization: token },
            });
            setUserFav(true);
        } catch (error) {}
    }
    async function deleteFav() {
        try {
            const token = await getToken();
            await Axios.get(`${url}/api/v1/users/deleteFavorite/${id}`, {
                headers: { authorization: token },
            });
            setUserFav(false);
        } catch (error) {}
    }
    let size = 35;
    if (userFav) {
        return (
            <TouchableOpacity onPress={deleteFav}>
                <MaterialCommunityIcons
                    name='heart'
                    size={size}
                    color='#f02e58'
                />
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity onPress={addFav}>
            <MaterialCommunityIcons
                name='heart-outline'
                size={size}
                color='#f02e58'
            />
        </TouchableOpacity>
    );
}
