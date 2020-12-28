import { Platform, StyleSheet } from 'react-native';
import { MAX_HEADER_HEIGHT } from '../Home/const';
import { MIN_HEADER_HEIGHT } from './const';

export default StyleSheet.create({
	image: {
		height: MAX_HEADER_HEIGHT,
		justifyContent: 'flex-end',
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
	},
	tagline: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		paddingHorizontal: 14,
		marginBottom: 6,
	},
	placename: {
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
		paddingHorizontal: 14,
		marginBottom: 30,
	},
	section: {
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	titleContainer: {
		flex: 1,
		alignSelf: 'stretch',
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageTitle: {
		color: 'white',
		backgroundColor: 'transparent',
		fontSize: 24,
	},
	navTitle: {
		color: 'white',
		fontSize: 18,
		backgroundColor: 'transparent',
	},
	searchBox: {
		marginTop: 16,
		backgroundColor: '#fff',
		paddingLeft: 24,
		padding: 12,
		alignSelf: 'center',
		borderRadius: 40,
		width: '90%',
	},
	navTitleView: {
		height: MIN_HEADER_HEIGHT,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: Platform.OS === 'ios' ? 40 : 5,
		opacity: 0,
	},
	categories: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
	},
	commentCard: {
		backgroundColor: 'white',
		padding: 8,
		borderRadius: 10,
		marginVertical: 8,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'row',
	},
	commentAvatar: {
		width: 40,
		height: 40,
		borderRadius: 50,
		marginRight: 20,
	},

	commentAuthor: {
		fontSize: 15,
		fontWeight: 'bold',
	},
	comment: {},
});
