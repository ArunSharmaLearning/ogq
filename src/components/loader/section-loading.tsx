'use client'
import { Box } from "@mui/material";
import Lottie from "lottie-react";
import Loader from '../../../public/section-loading.json'

const Loading = () => {

	return (
		<Box sx={(theme) => ({ height: theme.spacing(12), m: 'auto' })}>
			<Lottie
				style={{ height: '100%' }}
				animationData={Loader}
				loop={true}
			/>
		</Box>
	)

}

export default Loading;