import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const arcBlue = '#0B72B9'
const arcOrange = '#FFBA60'
const arcGrey = '#868686'
// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#fff',
		},
	},
	typography: {
		h1: {
			fontFamily: 'Raleway',
			fontWeight: 700,
			fontSize: '2.5rem',
			color: arcBlue,
			lineHeight: 1.5,
		},
	},
})

export default theme
