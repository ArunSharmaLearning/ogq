import DescriptionCard from "@/components/cards/description/description-card"
import { Stack } from "@mui/material"

const OlympicSport = ({ params }: { params: { sports: string } }) => {

	return (
		<>
			<Stack direction={'row'} flexWrap={'wrap'} gap={2}>
				<DescriptionCard />
				<DescriptionCard />
				<DescriptionCard />
				<DescriptionCard />
				<DescriptionCard />
				<DescriptionCard />
				<DescriptionCard />
			</Stack>
		</>
	)

}


export default OlympicSport