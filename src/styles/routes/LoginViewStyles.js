import {
	StyleSheet
} from 'react-native';
import Theme from '../theme'
export default StyleSheet.create({
	container: {
		flex: 1,
		padding: Theme.padding,
		paddingTop: Theme.padding,
	},
	submitButton: {
		alignItems: 'center',
		padding: 20
	},
	centerItems: {
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: 50,
	},
	inputTitle: {
		fontSize: 16,
		paddingBottom: 6,
		color: Theme.grey,
	},
	input: {
		height: 50,
		paddingHorizontal: 20,
	},
	inputWrap: {
		borderColor: Theme.border,
		borderWidth: 1,
		backgroundColor: 'white',
		margin: 0,
		marginBottom: 10,
		borderRadius: 5
	},
	loginButton: {
		borderRadius: 12,
		backgroundColor: Theme.pink,
		padding: 16,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 30,
		marginTop: 10
	},
	loginText: {
		fontSize: 16,
		fontWeight: '800',
		color: 'white'
	}
})
