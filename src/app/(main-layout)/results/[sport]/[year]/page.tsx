import callApi from "@/hooks/use-swr";
import { ResultComponent } from "@/components/result/result";


export async function generateStaticParams() {
	const sportsOlympic = await callApi('dropdown?page=olympics');
	const sportsParalympic = await callApi('dropdown?page=paralympics');

	const olympicResults = sportsOlympic?.data?.olympic_result ?? [];
	const paralympicResults = sportsParalympic?.data?.olympic_result ?? [];

	console.log('Params for Olympic Results:', olympicResults);
	console.log('Params for Paralympic Results:', paralympicResults);
	return [
		...olympicResults.flatMap((year: string) => [
			{ sport: 'olympic-result', year: encodeURIComponent(year) },
			{ sport: 'olympic-result', year: year }
		]),
		...paralympicResults.flatMap((year: string) => [
			{ sport: 'paralympic-result', year: encodeURIComponent(year) },
			{ sport: 'paralympic-result', year: year }
		])
	]
}

const SportResult = ({ params }: { params: { sport: string, year: string } }) => {

	return (
		<>
			<ResultComponent params={params} />
		</>
	);
};

export default SportResult;
