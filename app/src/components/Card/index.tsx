import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text } from 'react-native';
import { View } from 'react-native-animatable';
import {
	TouchableHighlight,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import styles from './styles';

interface Props {
	post: {
		image: string;
		title: string;
	};
	style?: {
		paddingVertical?: number;
		paddingLeft?: number;
		marginRight?: number;
		width?: number | string;
		height?: number;
		borderRadius?: number;
	};
}

export const Card: React.FC<Props> = ({
	post,
	style = {
		height: 250,
		width: 150,
		paddingVertical: 20,
		paddingLeft: 16,
		marginRight: 8,
		borderRadius: 10,
	},
}) => {
	const navigation = useNavigation();
	const {
		height,
		width,
		paddingVertical,
		paddingLeft,
		marginRight,
		borderRadius,
	} = style;
	return (
		<View style={{ paddingVertical, paddingLeft }}>
			<TouchableOpacity
				onPress={() => {
					//@ts-ignore
					navigation.push('Post', { post });
				}}
			>
				<Image
					source={{ uri: post.image }}
					style={[
						styles.image,
						{ width, height, marginRight, borderRadius },
					]}
				/>
				<View
					style={[styles.cover, { width, height, borderRadius }]}
				></View>
				<Feather
					name="map-pin"
					size={16}
					color="white"
					style={styles.pin}
				/>
				<Text style={styles.title}>{post.title}</Text>
			</TouchableOpacity>
		</View>
	);
};
