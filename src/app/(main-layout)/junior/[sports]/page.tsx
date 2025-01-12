import callApi from "@/hooks/use-swr";
import { SportComponent } from "@/components/sports";

export async function generateStaticParams() {
	const sports = await callApi('sports_in_navbar');

	return sports.data.junior.flatMap((sport) => ([{
		sports: sport.replaceAll(' ', '%20')
	},
	{ sports: sport, }
	]));

}

const JuniorSport = ({ params }: { params: { sports: string } }) => {
	return (
		<>
			<SportComponent params={params} category="junior" />
		</>
	);
};

export default JuniorSport;
