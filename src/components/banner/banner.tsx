'use client'

import { Box, Stack, Typography, alpha, useTheme } from "@mui/material"


const Banner = ({ image, text, subText, height = "22rem", sx = {}, transparent = false }: { image: string, text: string, subText?: string, sx?: object, height?: any, transparent?: boolean }) => {
	const theme = useTheme()

	return (
		<Box sx={{ p: 1, display: 'flex', position: 'relative', height: height, backgroundImage: `url(${image.startsWith('http') ? image : '/' + image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center bottom', textAlign: 'center', backgroundAttachment: 'fixed', mb: { xs: 2, sm: 3 }, ...sx }}>
			<Box sx={{ backgroundColor: transparent ? 'none' : alpha(theme.palette.secondary.main, 0.3), height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}></Box>
			<Stack direction='column' zIndex={1} justifyContent={'center'} alignItems={'center'} sx={{ width: '100%', color: theme.palette.common.white }}>
				<Typography variant="h3">{text}</Typography>
				{subText && <Typography sx={{ color: theme.palette.primary.main }} variant="h4">{subText}</Typography>}
			</Stack>
		</Box>
	)
}

export default Banner