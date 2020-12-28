import Axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { url } from '../../constant';
import { AuthContext } from '../../providers/Auth';

interface Props {
	uri: string;
}

export const usePagination = <T>({ uri }: Props) => {
	const { getToken } = useContext(AuthContext);
	const [page, setPage] = useState<number>(0);
	const [hasNext, setHasNext] = useState<boolean>(true);
	const [hasPrev, setHasPrev] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);
	const [data, setData] = useState<Array<T[]>>([[]]);

	useEffect(() => {
		setLoading(true);
		let cancel: any;
		if (typeof data[page] !== 'undefined') {
			if (data[page].length !== 0) {
				setLoading(false);
				return;
			}
		}
		const axiosConfig = {
			cancelToken: new Axios.CancelToken((c: any) => (cancel = c)),
			headers: {
				page,
				authorization: getToken(),
			},
		};
		Axios.get(`${url}/api/v1/${uri}`, axiosConfig)
			.then((res: any) => {
				let aux = data;
				aux[page] = res.data.data;
				setData(aux);
				setLoading(false);
				setHasNext(res.data.hasNext);
				setHasPrev(res.data.hasPrev);
			})
			.catch((error: any) => {
				setError(error);
				setLoading(false);
			});
		return () => cancel();
	}, [page, url, uri, data]);

	const nextPage = () => {
		if (hasNext) {
			setLoading(true);
			setPage((prev) => prev + 1);
		}
	};
	const prevPage = () => {
		if (hasPrev) {
			setLoading(true);
			setPage((prev) => prev - 1);
		}
	};
	return { error, page, data: data[page], loading, nextPage, prevPage };
};
