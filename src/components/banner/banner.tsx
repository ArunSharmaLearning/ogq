'use client'

import { Box, Stack, Typography, alpha, useTheme } from "@mui/material"


const Banner = ({
	image,
	text,
	subText,
	height = "22rem",
	sx = {},
	transparent = false
}: {
	image: string,
	text: string,
	subText?: string,
	sx?: object,
	height?: any,
	transparent?: boolean
}) => {

	const theme = useTheme();

	const isVideo =
		image.endsWith(".mp4") ||
		image.endsWith(".mov") ||
		image.endsWith(".ogg");

	return (
		<Box
			sx={{
				p: 1,
				display: 'flex',
				position: 'relative',
				height,
				textAlign: 'center',
				backgroundImage: isVideo
					? "none"
					: `url(${image.startsWith('http') ? image : '/' + image})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center bottom',
				backgroundAttachment: isVideo ? "scroll" : "fixed",
				mb: { xs: 2, sm: 3 },
				overflow: "hidden",
				...sx
			}}
		>
			{isVideo && (
				<video
					src={image.startsWith("http") ? image : "/" + image}
					autoPlay
					muted
					loop
					playsInline
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						width: "100%",
						height: "100%",
						objectFit: "cover",
						transform: "translate(-50%, -50%)",
						zIndex: 0
					}}
				/>
			)}
			<Box
				sx={{
					backgroundColor:
						transparent ? "none" : alpha(theme.palette.secondary.main, 0.3),
					height: "100%",
					width: "100%",
					position: "absolute",
					inset: 0,
					zIndex: 0
				}}
			/>

			{/* TEXT */}
			<Stack
				direction="column"
				zIndex={1}
				justifyContent="center"
				alignItems="center"
				sx={{ width: "100%", color: theme.palette.common.white }}
			>
				<Typography variant="h3">{text}</Typography>
				{subText && (
					<Typography
						sx={{ color: theme.palette.primary.main }}
						variant="h4"
					>
						{subText}
					</Typography>
				)}
			</Stack>
		</Box>
	);
};

export default Banner;