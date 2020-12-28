import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';

export default function Footer() {
	const insets = useSafeAreaInsets();
	return (
		<View style={{ paddingBottom: insets.bottom, marginBottom: 20 }}>
			<TextInput
				style={styles.searchBox}
				placeholder="Comenta tu experiencia"
				placeholderTextColor="#666"
			></TextInput>
			<Feather
				name="arrow-right"
				size={22}
				color="#666"
				style={{
					position: 'absolute',
					top: 30,
					right: 50,
					opacity: 0.6,
				}}
			/>
		</View>
	);
}
