import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import { SearchProvider } from '../../providers/Search';
import Masonary from './Masonary';

export const SearchView: React.FC = () => {
	return (
		<SearchProvider>
			<View style={{ flex: 1 }}>
				<Header />
				<Masonary />
			</View>
		</SearchProvider>
	);
};
