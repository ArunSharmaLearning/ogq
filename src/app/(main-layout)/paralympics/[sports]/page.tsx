import { SportComponent } from "@/components/sports";
import callApi from "@/hooks/use-swr";



export async function generateStaticParams() {
	const sports = await callApi('sports_in_navbar');
	return sports.data.paralympics.map((sport) => ({
		sports: sport,
	}));
}

const OlympicSport = ({ params }: { params: { sports: string } }) => {
	return (
		<>
			<SportComponent params={params} category="paralympics" />
		</>
	);
}

export default OlympicSport