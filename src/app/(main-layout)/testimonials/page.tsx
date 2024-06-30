import Banner from "@/components/banner/banner"
import { CarouselWrapper } from "@/components/carousel"
import { Box, Container, Typography } from "@mui/material"

const Testimonial = () => {

	return (
		<Box mb={4}>
			<Banner image="test.jpg" text="TESTIMONIAL" />

			<Container>
				<Typography variant="h2" className="underlineAfter" sx={{ mx: 'auto', width: 'fit-content' }} mb={4}>What People Are Saying</Typography>
				<CarouselWrapper />
			</Container>
		</Box>
	)
}

export default Testimonial