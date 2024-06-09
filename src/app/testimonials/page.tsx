import Banner from "@/components/banner/banner"
import { CarouselWrapper } from "@/components/carousel"
import { Box, Container, Typography } from "@mui/material"

const Testimonial = () => {

	return (
		<Box>
			<Banner image="test.jpg" text="Testimonial" />

			<Container>
				<Typography variant="h4" sx={{ mb: 4 }}>What People Are Saying</Typography>

				<CarouselWrapper />
			</Container>
		</Box>
	)
}

export default Testimonial