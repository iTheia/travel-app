import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	image: {
		width: 150,
		marginRight: 8,
		height: 250,
		borderRadius: 10,
	},
	cover: {
		width: 150,
		height: 250,
		marginRight: 8,
		borderRadius: 10,
		position: 'absolute',
		backgroundColor: '#000',
		opacity: 0.3,
	},
	pin: {
		position: 'absolute',
		marginTop: 4,
		left: 10,
		bottom: 10,
	},
	title: {
		position: 'absolute',
		color: 'white',
		marginTop: 4,
		fontSize: 14,
		left: 30,
		bottom: 10,
	},
});
