import Axios from "axios";
import { useState, useEffect, useContext } from "react";
import { url } from "../../constant";
import { AuthContext } from "../../providers/Auth";

export const useGet = <T>(uri: string, initialValue: T) => {
    const { getToken } = useContext(AuthContext);
    const [data, setData] = useState<T>(initialValue);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        let cancel: any;
        const requestUrl = `${url}/api/v1/${uri}`;
        const cancelToken = new Axios.CancelToken((c: any) => (cancel = c));
        getToken().then((token) => {
            const requestConfig = {
                cancelToken,
                headers: {
                    authorization: token,
                },
            };
            Axios.get(requestUrl, requestConfig)
                .then((response) => {
                    if (response.data.error) {
                        throw new Error(response.data.message);
                    }
                    setData(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setError(error.message);
                    setLoading(false);
                });
        });

        return () => cancel();
    }, [getToken, url, uri]);

    return {
        loading,
        data,
        error,
    };
};
