import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from './styles';
import { imageBackground, MAX_HEADER_HEIGHT } from './const';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export default () => {
	const navigation = useNavigation();
	return (
		<View>
			<ImageBackground
				source={imageBackground}
				style={[{ width: '100%', height: MAX_HEADER_HEIGHT }]}
			>
				<View style={styles.darkOverlay}></View>
				<View style={styles.searchContainer}>
					<Text style={styles.userGreet}>Durango</Text>
					<Text style={styles.userText}>una ciudad increible</Text>
				</View>
				<View>
					<TextInput
						style={styles.searchBox}
						placeholder="Conoce un nuevo lugar"
						placeholderTextColor="#666"
					></TextInput>
					<Feather
						name="search"
						size={22}
						color="#666"
						style={{
							position: 'absolute',
							top: 30,
							right: 60,
							opacity: 0.6,
						}}
					/>
				</View>
				<Feather
					style={{
						position: 'absolute',
						top: 40,
						left: 16,
						opacity: 0.6,
					}}
					name="menu"
					size={22}
					color="#fff"
					onPress={() =>
						navigation.dispatch(DrawerActions.toggleDrawer())
					}
				/>
				<Feather
					name="bell"
					size={22}
					color="#fff"
					style={{
						position: 'absolute',
						top: 40,
						right: 16,
						opacity: 0.6,
					}}
				/>
			</ImageBackground>
		</View>
	);
};
