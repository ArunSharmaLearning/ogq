import Banner from "@/components/banner/banner";
import DescriptionCard from "@/components/cards/description/description-card";
import callApi from "@/hooks/use-swr";
import { Box, Container, List, ListItem, Stack, Typography } from "@mui/material";


const Team = async ({ params }: { params: { nation: string } }) => {

	const nation = params.nation;

	let bannerText = "", endpoint = "";
	if (nation == 'india') {
		bannerText = "Team OGQ, INDIA"
		endpoint = "team_ogq_us"
	}
	else {
		bannerText = "Team OGQ, USA"
		endpoint = "team_ogq_india"
	}

	const teams = await callApi(endpoint);


	return (
		<Box>
			<Banner image='/test.jpg' text={bannerText} />
			<Container>
				<Typography variant="h3" mb={5} className="underlineAfter">
					Meet Our Team
				</Typography>

				<Stack direction={'row'} flexWrap={'wrap'} gap={2} justifyContent={"flex-start"}>
					{teams.map((team) =>
						<DescriptionCard key={team.id} team={team} />
					)}
				</Stack>
			</Container>
		</Box>
	)
}

export default Team;