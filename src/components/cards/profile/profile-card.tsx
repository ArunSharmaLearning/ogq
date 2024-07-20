'use client'
import CommonButton from "@/components/button/common/common-button";
import { Box, Stack, Typography } from "@mui/material";
import { OverlayBox } from "../description/description.style";
import { API_URL } from "@/constants/api";

const ProfileCard = ({ name, title, image }: { name: string, title: string, image: string }) => {

	return (
		<Box sx={{ flex: 1, maxWidth: { sm: "30%", xs: '100%' }, minWidth: '20rem' }}>
			<OverlayBox backgroundImage={`${API_URL}/${image}`}>
			</OverlayBox>

			<Stack direction={'column'} sx={{
				textAlign: 'center',
				backgroundColor: '#F9FAFB',
				boxShadow: '0 0 2rem 0 rgba(0, 0, 0, 0.1)',
				padding: '0.8rem 0.5rem',
				transform: 'translateY(-50%)',
				width: '85%',
				margin: 'auto',
				py: 0.8

			}}>
				<Typography
					sx={{
						fontSize: {
							xs: '1.1rem',    // default for extra-small screens
							sm: '1.3rem',  // small screens and up
						},
					}}
					variant="h5"
				>{name}</Typography>
				<Typography variant="h5" sx={(theme) => ({ color: theme.palette.primary.main })}>{title}</Typography>
			</Stack>
		</Box >
	)
}

export default ProfileCard;