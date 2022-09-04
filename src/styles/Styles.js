import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	inline: {
		flexDirection: 'row',
		width: '100%',
		height: '100%',
	},
	text: {
		color: '#000000',
		fontSize: 150,
	},
	table: {
		width: '35%',
		height: '100%',
	},
	box: {
		display: 'flex',
		paddingVertical: 2,
		alignSelf: 'stretch',
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
	configBox: {
		paddingVertical: 20,
		alignSelf: 'stretch',
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
	configBox2: {
		paddingVertical: 5,
		paddingHorizontal: 5,
		alignSelf: 'stretch',
		justifyContent: 'center',
		borderColor: 'black',
		borderWidth: 1,
	},
	configIo: {
		height: 20,
		marginHorizontal: 10,
		marginVertical: 5,
		alignSelf: 'flex-end',
		paddingHorizontal: 10,
		borderColor: 'black',
		borderWidth: 1,
		backgroundColor: '#ffff',
	},
	configText: {
		alignSelf: 'baseline',
		paddingRight: 25,
		height: 20,
	},
});

export default Styles;