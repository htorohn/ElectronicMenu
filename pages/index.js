import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	imagesContainer: {
		marginTop: '2em',
		marginBottom: '3em',
	},
	menuImage: {
		maxWidth: '50em',
		[theme.breakpoints.down('xs')]: {
			maxWidth: 300,
		},
	},
	imageContainer: {
		marginBottom: '1em',
	},
}))

const images = new Array(12).fill(0)

const ElectronicMenu = () => {
	const classes = useStyles()
	const theme = useTheme()

	return (
		<Grid container direction='column'>
			<Grid
				item
				container
				direction='column'
				alignItems='center'
				className={classes.imagesContainer}
			>
				{images.map((image, index) => (
					<Grid item key={index} className={classes.imageContainer}>
						<img
							alt={`Kfes de Barro Menu Page ${index + 1}`}
							src={`/assets/${index + 1}.jpg`}
							className={classes.menuImage}
						/>
					</Grid>
				))}
			</Grid>
		</Grid>
	)
}

export default ElectronicMenu
