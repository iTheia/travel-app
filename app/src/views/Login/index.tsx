import React from 'react';
import { View } from 'react-native';
import { AuthNavProps } from '../../navigation/Auth/types';
import styles from './styles';
import Form from './Form';
import Header from './Header';

export const LoginView: React.FC<AuthNavProps<'Login'>> = () => {
	return (
		<View style={styles.container}>
			<Header />
			<Form />
		</View>
	);
};
