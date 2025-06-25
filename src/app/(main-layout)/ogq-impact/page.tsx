import Banner from "@/components/banner/banner"
import DescriptionCard from "@/components/cards/description/description-card"
import callApi from "@/hooks/use-swr"
import { Container, Stack, Typography } from "@mui/material"


const OGQImpact = async () => {

	const { data } = await callApi('ogq_impact');
	return (
		<>
			<Banner image="editable/impact.jpg" text="OGQ Impact" />

			<Container>
				<Typography variant="h4" mb={4} className="underlineAfter">
					How OGQ made a difference
				</Typography>
				<Stack direction={'row'} flexWrap={'wrap'} columnGap={3} rowGap={1}>
					{data?.map((profile: any) =>
						<DescriptionCard key={profile.id} team={profile} />
					)}
				</Stack>
			</Container >
		</>
	)
}

export default OGQImpact