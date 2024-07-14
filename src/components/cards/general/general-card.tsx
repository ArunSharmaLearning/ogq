'use client'
import CommonButton from "@/components/button/common/common-button";
import { Box, Stack, Typography } from "@mui/material";
import { OverlayBox } from "../description/description.style";

const GeneralCard = ({ text, title, link }: { text: string, title: string, link: string }) => {

	return (
		<Box sx={{ flex: 1, maxWidth: { sm: "32.2%", xs: '100%' }, minWidth: '20rem' }}>
			<OverlayBox backgroundImage="test.jpg" sx={{ height: '16rem' }} className="overlay-animation">
				<Stack direction={'column'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} className="overlay-text">
					<Typography variant="body1"> {text}</Typography>
					<CommonButton link={link}> Know More </CommonButton>
				</Stack>
			</OverlayBox>

			<Typography sx={{
				textAlign: 'center',
				backgroundColor: '#fff',
				boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.1)',
				padding: '1rem',
				transform: 'translateY(-50%)',
				width: '85%',
				margin: 'auto'
			}}
				variant="h5"
			>{title}</Typography>
		</Box >
	)
}

export default GeneralCard;