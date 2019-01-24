import {
	StyleSheet,
} from 'react-native'
import Theme from '../theme'

export default StyleSheet.create({
	button: {
		borderRadius: 2,
	},
	text: {
		color: Theme.linkColor,
		textAlign: 'center',
		padding: 8,
		fontSize: 18,
	},
	textDisabled: {
		color: '#cdcdcd',
	},
});