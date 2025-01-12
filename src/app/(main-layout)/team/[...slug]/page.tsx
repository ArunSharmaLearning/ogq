
import { TeamComponent } from "@/components/team/team";
import callApi, { useAPI } from "@/hooks/use-swr";


export async function generateStaticParams() {


	const sports = await callApi('dropdown');


	const params = [
		{ slug: ['usa'] },
	];

	sports.data.team_ogq_india_groups.map((team: string) => {
		params.push({ slug: ['india', team.replaceAll(' ', '%20')] })
	})

	return params;
}

const Team = ({ params }: { params: { slug: string[] } }) => {
	// const nation = params.slug[0];
	// const team = params.slug[1];

	// let endpoint = "";
	// if (nation == "usa") {
	// 	endpoint = `team_ogq_us`
	// } else {
	// 	endpoint = `team_ogq_india?group=${team}`;
	// }
	// const { data: teams, isLoading } = useAPI(endpoint);

	return (
		<>
			<TeamComponent params={params} />
		</>
	);
};

export default Team;
