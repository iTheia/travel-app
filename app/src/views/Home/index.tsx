import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { sample } from '../../constant';
import Header from './Header';
import Recent from './Recent';
import { List } from '../../components/List';

export const HomeView: React.FC = () => {
	const [gallery, setgallery] = useState([
		{
			image:
				'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27',

			title: 'Switzerland',
			key: '1',
		},
		{
			image:
				'http://images.pexels.com/photos/672355/pexels-photo-672355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27',

			title: 'New Zeland',
			key: '2',
		},
		{
			image:
				'http://images.pexels.com/photos/672355/pexels-photo-672355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27',

			title: 'New Zeland',
			key: '3',
		},
		{
			image:
				'http://images.pexels.com/photos/672355/pexels-photo-672355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27',

			title: 'New Zeland',
			key: '4',
		},
	]);

	return (
		<View style={{ flexGrow: 1, height: '100%' }}>
			<Header />
			<ScrollView>
				<List list={gallery} text="Tendencias" />
				<Recent />
			</ScrollView>
		</View>
	);
};
