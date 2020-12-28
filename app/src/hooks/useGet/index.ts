import Axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { url } from '../../constant';
import { AuthContext } from '../../providers/Auth';

interface Props<T> {
	uri: string;
	initialValue: T;
	config?: {
		auth?: boolean;
	};
}

export const useGet = <T>({ initialValue, uri }: Props<T>) => {
	const { getToken } = useContext(AuthContext);
	const [data, setData] = useState<T>(initialValue);
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setLoading(true);
		let cancel: any;
		const requestConfig = {
			cancelToken: new Axios.CancelToken((c: any) => (cancel = c)),
			headers: {
				authorization: getToken(),
			},
		};
		Axios.get(`${url}/api/v1/${uri}`, requestConfig)
			.then((response: any) => {
				setData(response.data);
				setLoading(false);
			})
			.catch((error: any) => {
				setError(error);
				setLoading(false);
			});
		return () => cancel();
	}, [getToken, url, uri]);

	return {
		loading,
		data,
		error,
	};
};
