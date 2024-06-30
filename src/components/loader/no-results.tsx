'use client'
import { Box, Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import Loader from '../../../public/no-result.json'

const NoResults = () => {

	return (
		<Stack flexDirection={'column'}>
			<Box sx={(theme) => ({ height: theme.spacing(16), m: 'auto' })}>
				<Lottie
					style={{ height: '100%' }}
					animationData={Loader}
					loop={true}
				/>
			</Box>
			<Typography variant="h4" sx={{ mx: 'auto', width: 'fit-content' }} className="underlineAfter"> No Result Found!</Typography>
		</Stack>
	)

}

export default NoResults;