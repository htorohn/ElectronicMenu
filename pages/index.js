import React from 'react'
import Head from 'next/head'
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
		<>
			<Head>
				<title key='title'>Kfés de Barro</title>
				<meta
					name='description'
					key='description'
					content='El mejor ambiente familiar, las mejores crepas y pizzas de Santa Lucía'
				/>
				<meta
					property='og:title'
					key='og:title'
					content='Kfés de Barro | Una visita obligada'
				/>
				<meta
					property='og:url'
					key='og:url'
					content='https://kfesdebarro.vercel.app/'
				/>
				<link
					rel='canonical'
					key='canonical'
					href='https://kfesdebarro.vercel.app/'
				/>
			</Head>
			<Grid container direction='column'>
				<Grid
					item
					container
					direction='column'
					alignItems='center'
					className={classes.imagesContainer}
				>
					{images.map((image, index) => (
						<Grid
							item
							key={index}
							className={classes.imageContainer}
						>
							<img
								alt={`Kfes de Barro Menu Page ${index + 1}`}
								src={`/assets/${index + 1}.png`}
								className={classes.menuImage}
							/>
						</Grid>
					))}
				</Grid>
			</Grid>
		</>
	)
}

export default ElectronicMenu
