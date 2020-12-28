import React, { Fragment } from 'react';
import { StatusBar, Text, View } from 'react-native';
import styles from './styles';

export default () => (
	<Fragment>
		<StatusBar backgroundColor="#009387" barStyle="light-content" />
		<View style={styles.header}>
			<Text style={styles.text_header}>Welcome!</Text>
		</View>
	</Fragment>
);
