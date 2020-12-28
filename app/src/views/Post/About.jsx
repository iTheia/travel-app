import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PostContext } from '../../providers/Post/type';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { List } from '../../components/List';
import styles from './styles';
import Category from '../../components/Category';

export const About = () => {
	const { post, related } = useContext(PostContext);

	return (
		<ScrollView>
			<View style={styles.section}>
				<Text style={{ color: '#555', fontSize: 16 }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Possimus, omnis?
				</Text>
			</View>
			<View style={styles.section}>
				<View style={styles.categories}>
					{['comida', 'museo', 'plaza', 'naturaleza'].map(
						(category, index) => (
							<Category
								onPress={() => {}}
								category={category}
								key={index}
							/>
						)
					)}
				</View>
			</View>
			<View style={[styles.section, { height: 250 }]}>
				<MapView
					provider={PROVIDER_GOOGLE}
					style={{ flex: 1 }}
					region={{
						latitude: 22.6293867,
						longitude: 88.4354486,
						latitudeDelta: 0.00864195044303443,
						longitudeDelta: 0.000142817690068,
					}}
				>
					<MapView.Marker
						coordinate={{
							latitude: 22.6293867,
							longitude: 88.4354486,
						}}
						image={require('../../../assets/map_marker.png')}
					/>
				</MapView>
			</View>
			<View style={styles.section}>
				<List list={related} text="Relacionados" />
			</View>
		</ScrollView>
	);
};
