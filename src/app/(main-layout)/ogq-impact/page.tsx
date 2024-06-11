import Banner from "@/components/banner/banner"
import DescriptionCard from "@/components/cards/description/description-card"
import { Container, Stack, Typography } from "@mui/material"


const OGQImpact = () => {
	return (
		<>
			<Banner image="test.jpg" text="OGQ Impact" />

			<Container>
				<Typography variant="h4" mb={4} className="underlineAfter">
					How OGQ made a difference
				</Typography>
				<Stack direction={'row'} flexWrap={'wrap'} spacing={2}>
					<DescriptionCard />
					<DescriptionCard />
					<DescriptionCard />
					<DescriptionCard />
					<DescriptionCard />
					<DescriptionCard />
					<DescriptionCard />
				</Stack>

			</Container>

		</>
	)
}

export default OGQImpact