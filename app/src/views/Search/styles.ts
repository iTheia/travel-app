import { StyleSheet } from 'react-native';
import { grey } from '../../constant';
import { MAX_HEADER_HEIGHT } from './const';

export default StyleSheet.create({
	textInput: {
		borderColor: '#000',
		backgroundColor: '#fff',
		paddingLeft: 24,
		padding: 12,
		borderRadius: 5,
		width: '100%',
	},
	container: {
		padding: 15,
		backgroundColor: grey,
		height: MAX_HEADER_HEIGHT,
		zIndex: 1000,
		elevation: 1000,
	},
	icon: {
		position: 'absolute',
		top: 30,
		right: 30,
		opacity: 0.6,
	},
});
