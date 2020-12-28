import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from '../../components/Card';
import { sample } from '../../constant';
import styles from './styles';

export const FavoritesView: React.FC = () => {
	const navigation = useNavigation();

	if (sample.length === 0) {
		return (
			<View style={{ flex: 1 }}>
				<View style={[styles.section]}>
					<Text style={styles.title}>Aun no tienes Favoritos</Text>
				</View>
				<Button
					title="Descubre nuevos lugares"
					onPress={() => navigation.navigate('Search')}
				/>
			</View>
		);
	}

	return (
		<View style={{ flex: 1 }}>
			<View style={[styles.section]}>
				<Text style={styles.title}>Lugares que mas te han gustado</Text>
			</View>
			<ScrollView style={styles.section}>
				{sample.map((item, index) => (
					<View key={index} style={{ marginBottom: 15 }}>
						<Card
							post={item}
							style={{
								width: '100%',
								height: 175,
								borderRadius: 20,
							}}
						/>
					</View>
				))}
			</ScrollView>
		</View>
	);
};
