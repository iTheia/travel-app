import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthNavProps } from '../../navigation/Auth/types';
import { MaterialIcons } from '@expo/vector-icons';

export const LandingView: React.FC<AuthNavProps<'Landing'>> = ({
	navigation,
}) => {
	const { colors } = useTheme();

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#009387" barStyle="light-content" />
			<View style={styles.header}>
				<Animatable.Image
					animation="bounceIn"
					duration={500}
					source={require('../../../assets/logo.png')}
					style={styles.logo}
					resizeMode="stretch"
				/>
			</View>
			<View
				style={[styles.footer, { backgroundColor: colors.background }]}
			>
				<Text style={[styles.title, { color: colors.text }]}>
					Descubre esta maravilloza ciudad
				</Text>
				<Text style={styles.text}>Inicia sesión</Text>
				<View style={styles.button}>
					<TouchableOpacity
						onPress={() => navigation.navigate('Login')}
					>
						<LinearGradient
							colors={['#01ab9d', '#01ab9d']}
							style={styles.signIn}
						>
							<Text style={styles.textSign}>Comienza</Text>
							<MaterialIcons
								name="navigate-next"
								color="#fff"
								size={20}
							/>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
