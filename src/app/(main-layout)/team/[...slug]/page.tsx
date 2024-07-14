'use client'
import DescriptionCard from "@/components/cards/description/description-card";
import NoResults from "@/components/loader/no-results";
import Loading from "@/components/loader/section-loading";
import { useAPI } from "@/hooks/use-swr";
import {
	Box,
	Stack,
} from "@mui/material";

const Team = ({ params }: { params: { slug: string } }) => {
	const nation = params.slug[0];
	const team = params.slug[1];

	let endpoint = "";
	if (nation == "usa") {
		endpoint = `team_ogq_us`
	} else {
		endpoint = `team_ogq_india?group=${team}`;
	}
	const { data: teams, isLoading } = useAPI(endpoint);

	return (
		<Box>
			{isLoading ? (
				<Loading />
			) : teams && teams.length > 0 ? (
				<Stack
					direction={"row"}
					flexWrap={"wrap"}
					gap={2}
					justifyContent={"flex-start"}
				>
					{teams.map((team) => (
						<DescriptionCard key={team.id} team={team} />
					))}
				</Stack>
			) : (
				<NoResults text="Teams" />
			)}
		</Box>
	);
};

export default Team;
