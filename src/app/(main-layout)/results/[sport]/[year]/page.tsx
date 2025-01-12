import callApi from "@/hooks/use-swr";
import { ResultComponent } from "@/components/result/result";


export async function generateStaticParams() {
	const sports = await callApi('dropdown');
	return sports?.data?.olympic_result.flatMap((year: string) => [
		{ sport: 'olympic-result', year: year.replaceAll(' ', '%20') },
		{ sport: 'paralympic-result', year: year.replaceAll(' ', '%20') }
	]);
}

const SportResult = ({ params }: { params: { sport: string, year: string } }) => {

	return (
		<>
			<ResultComponent params={params} />
		</>
	);
};

export default SportResult;
