import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Form from './Form';
import Header from './Header';

export const RegisterView: React.FC = () => {
	return (
		<View style={styles.container}>
			<Header />
			<Form />
		</View>
	);
};
