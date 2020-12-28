import React, { createContext, useState } from 'react';
import { clasifications, sample } from './const';
export const SearchContext = createContext({
	search: '',
	post: [],
	clasification: [],
	toggleClasification: () => {},
	fetchData: () => {},
});

export const SearchProvider = ({ children }) => {
	const [search, setSearch] = useState('');
	const [post, setPost] = useState(sample);
	const [clasification, setClasification] = useState(clasifications);

	function toggleClasification(item) {
		setClasification((prev) => [
			...prev.map((clasification) => {
				if (clasification.key === item.key) {
					return {
						...clasification,
						selected: !item.selected,
					};
				}
				return clasification;
			}),
		]);
	}
	function fetchData() {}
	return (
		<SearchContext.Provider
			value={{
				fetchData,
				toggleClasification,
				search,
				post,
				clasification,
			}}
		>
			{children}
		</SearchContext.Provider>
	);
};
