import CommonButton from "@/components/button/common/common-button";
import { Box, Stack, Typography } from "@mui/material";
import { OverlayBox } from "../description/description.style";
import Link from "next/link";
import { useRouter } from "@/hooks/use-router";

const GeneralCard = ({ text, title }: { text: string, title: string }) => {

	const { push } = useRouter();
	return (
		<Box sx={{ flex: 1, maxWidth: '33%', px: 1 }}>
			<OverlayBox backgroundImage="test.jpg" className="overlay-animation">
				<Stack direction={'column'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} className="overlay-text">
					<Typography component='p'> {text}</Typography>
					<CommonButton link='/vision-and-mission'> Know More </CommonButton>
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