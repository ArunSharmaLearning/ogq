'use client'

import { Box, Typography, alpha } from "@mui/material"


const Banner = ({ image, text, sx = {} }: { image: string, text: string, sx?: object }) => {
	return (
		<Box sx={{ display: 'flex', position: 'relative', height: '20rem', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center', textAlign: 'center', backgroundAttachment: 'fixed', mb: 5, ...sx }}>
			<Box sx={(theme) => ({ backgroundColor: alpha(theme.palette.secondary.main, 0.7), height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' })}></Box>
			<Typography sx={{ color: 'white', zIndex: '1', margin: 'auto', alignItems: 'center', textAlign: 'center' }} variant="h3">{text}</Typography>
		</Box>
	)
}

export default Banner