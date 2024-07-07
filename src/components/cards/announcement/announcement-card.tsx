'use client'
import CommonButton from "@/components/button/common/common-button";
import { Box, Stack, Typography } from "@mui/material";
import { OverlayBox } from "../description/description.style";
import { API_URL } from "@/constants/api";

const AnnouncementCard = ({ link, image }: { link: string, image: string }) => {

	return (
		<Box sx={{ flex: 1, }}>
			<OverlayBox backgroundImage={`${API_URL}/${image}`} sx={{ height: '23rem' }} className="overlay-animation">
				<Stack direction={'column'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} className="overlay-text">
					<CommonButton link={link}> Know More </CommonButton>
				</Stack>
			</OverlayBox>
		</Box >
	)
}

export default AnnouncementCard;