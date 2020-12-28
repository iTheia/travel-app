import React, { useContext } from 'react';
import { View } from 'react-native';
import { Avatar, Title, Caption, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../../providers/Auth';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

export function DrawerContent(props) {
	const { logOut } = useContext(AuthContext);
	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={styles.userInfoSection}>
						<View style={{ flexDirection: 'row', marginTop: 15 }}>
							<Avatar.Image
								source={{
									uri:
										'https://api.adorable.io/avatars/50/abott@adorable.png',
								}}
								size={50}
							/>
							<View
								style={{
									marginLeft: 15,
									flexDirection: 'column',
								}}
							>
								<Title style={styles.title}>John Doe</Title>
								<Caption style={styles.caption}>@j_doe</Caption>
							</View>
						</View>
					</View>

					<Drawer.Section style={styles.drawerSection}>
						<DrawerItem
							icon={({ color, size }) => (
								<MaterialCommunityIcons
									name="home-outline"
									color={color}
									size={size}
								/>
							)}
							label="Inicio"
							onPress={() => {
								props.navigation.navigate('Home');
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Feather
									name="heart"
									color={color}
									size={size}
								/>
							)}
							label="Favoritos"
							onPress={() => {
								props.navigation.navigate('Favorites');
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<MaterialCommunityIcons
									name="account-outline"
									color={color}
									size={size}
								/>
							)}
							label="Perfil"
							onPress={() => {
								props.navigation.navigate('Profile');
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Feather
									name="help-circle"
									color={color}
									size={size}
								/>
							)}
							label="Soporte"
							onPress={() => {
								props.navigation.navigate('Support');
							}}
						/>
					</Drawer.Section>
				</View>
			</DrawerContentScrollView>
			<Drawer.Section style={styles.bottomDrawerSection}>
				<DrawerItem
					icon={({ color, size }) => (
						<MaterialCommunityIcons
							name="exit-to-app"
							color={color}
							size={size}
						/>
					)}
					label="Cerrar sesion"
					onPress={logOut}
				/>
			</Drawer.Section>
		</View>
	);
}
