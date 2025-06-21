'use client'
import { Box, Button, Stack, Typography } from "@mui/material";
import { API_URL } from "@/constants/api";
import Image from "next/image";
import Link from "next/link";

const CPCard = ({ link, image, heading, subHeading1, subHeading2, bgColor }: { link: string, image: string, heading: string, subHeading1: string, subHeading2: string, bgColor: string }) => {

	// create a simple card with an image, heading and a subheading and learn more button at the end
	return (
		<Box sx={{ flex: 1 }}>
			<Box sx={{ height: '24rem', borderRadius: 3, overflow: 'hidden', boxShadow: 2, }}>
				<Box sx={{ height: '50%', position: 'relative' }}>
					<Image priority unoptimized src={`${image}`} alt={heading} fill style={{ objectFit: 'cover' }} />
				</Box>
				<Stack height={'50%'} bgcolor={bgColor} direction={'column'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} className="overlay-text">
					<Typography variant="h5" sx={{ my: 2 }}>{heading}</Typography>
					<Typography variant="body1" sx={{ mb: 0 }}>{subHeading1}</Typography>
					<Typography variant="body1" sx={{ mb: 'auto' }}>{subHeading2}</Typography>
					<Link href={`/coaches/${link}`} style={{ textDecoration: 'none' }}>
					<Button variant="contained" sx={{ marginBottom: 3 }}> Learn More </Button>
					</Link>
				</Stack>
			</Box>
		</Box >
	)
}

export default CPCard;