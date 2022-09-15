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
	resetButton: {
		backgroundColor: 'none',
	},
	resetButtonText: {
		color: '#F5B65C',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	box: {
		display: 'flex',
		paddingVertical: 2,
		alignSelf: 'stretch',
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
	lastNumbers: {
		flexGrow: 1,
		justifyContent: 'center',
	},
	lastNumber: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#555555',
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
		width: 200,
		height: 40,
	},
	configText: {
		alignSelf: 'baseline',
		paddingRight: 25,
		height: 20,
	},
	configInline: {
		flexDirection: 'row',
	},
});

export default Styles;
