import callApi from "@/hooks/use-swr";
import { SportComponent } from "@/components/sports";


export async function generateStaticParams() {
	const sports = await callApi('sports_in_navbar');

	return sports.data.olympics.map((sport) => ({
		sports: sport.replaceAll(' ', '%20'),
	}));

}

const OlympicSport = ({ params }: { params: { sports: string } }) => {


	return (
		<>
			<SportComponent category="olympics" params={params} />
		</>
	);
};

export default OlympicSport;
