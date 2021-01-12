import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { recent } from './const';
import styles from './styles';

export default () => {
	return (
		<View style={{ padding: 20, marginBottom: 60 }}>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Text style={styles.title}>Vista recientemente</Text>
				<Text
					style={[styles.title, { fontSize: 14, color: '#ff6200' }]}
				>
					Ver mas
				</Text>
			</View>
			<Image source={{ uri: recent }} style={styles.image} />
			<View style={{ position: 'absolute', bottom: 0, padding: 16 }}>
				<View style={{ flexDirection: 'row' }}>
					<Feather
						name="map-pin"
						color="white"
						size={20}
						style={{ marginLeft: 10, position: 'relative', top: 4 }}
					/>
					<Text
						style={{
							fontSize: 22,
							color: 'white',
							fontWeight: 'normal',
							marginBottom: 10,
							marginHorizontal: 10,
						}}
					>
						Venice
					</Text>
				</View>
				<Text
					style={{
						fontSize: 14,
						color: 'white',
						fontWeight: 'normal',
						marginBottom: 20,
						opacity: 0.9,
						marginLeft: 16,
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
					quis.
				</Text>
			</View>
		</View>
	);
};
