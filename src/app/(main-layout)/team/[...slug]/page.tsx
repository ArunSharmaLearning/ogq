
import { TeamComponent } from "@/components/team/team";
import callApi, { useAPI } from "@/hooks/use-swr";


export async function generateStaticParams() {
	const sports = await callApi('dropdown');

	const params = [
		{ slug: ['usa'] },
	];

	sports.data.team_ogq_india_groups.map((team: string) => {
		params.push({ slug: ['india', team.replaceAll(' ', '%20')] })
		params.push({ slug: ['india', team] })
	})

	return params;
}

const Team = ({ params }: { params: { slug: string[] } }) => {
	return (
		<>
			<TeamComponent params={params} />
		</>
	);
};

export default Team;
