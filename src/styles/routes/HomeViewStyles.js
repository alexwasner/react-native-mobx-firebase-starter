import { StyleSheet } from 'react-native';
export default StyleSheet.create({
	root: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	bar: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	h1: {
		fontSize: 24,
		textAlign: 'center',
		margin: 30,
	},
	footer: {
		fontSize: 10,
		color: '#888',
		marginTop: 10,
	}
})
