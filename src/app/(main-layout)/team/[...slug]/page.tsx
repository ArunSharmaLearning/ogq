// 'use client'
import DescriptionCard from "@/components/cards/description/description-card";
import NoResults from "@/components/loader/no-results";
import callApi from "@/hooks/use-swr";
import {
	Box,
	Container,
	List,
	ListItem,
	Stack,
	Typography,
} from "@mui/material";
// import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

const Team = async ({ params }: { params: { slug: string } }) => {
	// const searchParams = useSearchParams()
	const nation = params.slug[0];
	const team = params.slug[1];

	console.log("TEAM", nation, team);
	let endpoint = "";
	if (nation == "usa") {
		endpoint = team == 'all' ? `team_ogq_usa` : `team_ogq_usa?group=${team}`
	} else {
		endpoint = team == 'all' ? `team_ogq_india` : `team_ogq_india?group=${team}`;
	}
	const teams = await callApi(endpoint);

	return (
		<Box>
			{teams && teams.length > 0 ? (
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
				<NoResults text="Teams"/>
			)}
		</Box>
	);
};

export default Team;
