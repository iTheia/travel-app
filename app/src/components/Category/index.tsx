import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from './styles';

interface Props {
	category: string;
	onPress: (item: any) => void;
	item?: {
		text: string;
		key: string;
		selected: boolean;
	};
}

export default ({ category, onPress, item }: Props) => (
	<TouchableWithoutFeedback onPressIn={() => onPress(item)}>
		<View style={styles.categoryContainer}>
			<FontAwesome
				name="tag"
				size={16}
				color={item?.selected ? '#1f1f1f' : '#fff'}
			/>
			<Text style={styles.category}>{category}</Text>
		</View>
	</TouchableWithoutFeedback>
);
