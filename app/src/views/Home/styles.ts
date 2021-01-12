import { StyleSheet } from 'react-native';
import { height, MAX_HEADER_HEIGHT } from './const';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	darkOverlay: {
		position: 'absolute',
		top: 0,
		right: 0,
		left: 0,
		height: MAX_HEADER_HEIGHT,
		backgroundColor: '#000',
		opacity: 0.2,
		borderBottomRightRadius: 65,
	},
	searchContainer: {
		paddingTop: 100,
		paddingLeft: 16,
	},
	userGreet: {
		fontSize: 38,
		fontWeight: 'bold',
		color: 'white',
	},
	userText: {
		fontSize: 16,
		fontWeight: 'normal',
		color: 'white',
	},
	searchBox: {
		marginTop: 16,
		backgroundColor: '#fff',
		paddingLeft: 24,
		padding: 12,
		borderTopRightRadius: 40,
		borderBottomRightRadius: 40,
		width: '90%',
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
	},
	content: {
		padding: 20,
	},
	image: {
		width: '100%',
		height: 250,
		borderRadius: 10,
		marginTop: 10,
		alignSelf: 'center',
	},
});
