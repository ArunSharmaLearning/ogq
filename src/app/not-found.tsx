import CommonButton from "@/components/button/common";
import { Typography, Stack } from "@mui/material";

const NotFound = () => {
	return (
		<Stack alignItems={'center'} justifyContent={'center'} alignContent={'center'} height={'100%'}>
			<Typography sx={{ fontSize: { xs: '20vw', sm: '12vw' } }} mb={0} variant="h1">404</Typography>
			<Typography variant="h5" mb={1}>Page Not Found</Typography>
			<CommonButton link="/">Go Home</CommonButton>
		</Stack>
	)
}

export default NotFound