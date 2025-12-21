import callApi from "@/hooks/use-swr";
import { ResultComponent } from "@/components/result/result";


export async function generateStaticParams() {
	const sportsOlympic = await callApi('dropdown?page=olympics');
	const sportsParalympic = await callApi('dropdown?page=paralympics');

	const olympicResults = sportsOlympic?.data?.olympic_result ?? [];
	const paralympicResults = sportsParalympic?.data?.olympic_result ?? [];

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


export async function generateMetadata({ params }: { params: { sport: string, year: string } }) {
	// const { data: profiles } = await callApi(params.sports);
	// You can customize these fields based on your API response

	// const sport =
	// 	params.sport.charAt(0).toUpperCase() + params.sport.slice(1);

	const sport = decodeURIComponent(params.sport)
		.replace(/[-_]/g, " ")
		.split(" ")
		.map(w => w.charAt(0).toUpperCase() + w.slice(1))
		.join(" ");

	const slug = decodeURIComponent(params.year).toLowerCase().split(' ');

	return {
		title: `${sport} - ${slug[0].charAt(0).toUpperCase() + slug[0].slice(1)} ${slug[1]} | OGQ`,
		// description: profiles.data[0]?.seo_meta_description || `Explore junior athletes for ${params.sports} at OGQ.`,
		// alternates: {
		// 	canonical: profiles.data[0]?.seo_canonical_uri || `https://yourdomain.com/junior/${params.sports}`,
		// },
		// openGraph: {
		// 	title: profiles.data[0]?.seo_meta_title || `${params.sports} - Junior | OGQ`,
		// 	description: profiles.data[0]?.seo_meta_description || `Explore junior athletes for ${params.sports} at OGQ.`,
		// 	url: profiles.data[0]?.seo_canonical_uri || `https://yourdomain.com/junior/${params.sports}`,
		// 	type: "website",
		// 	images: [
		// 		{
		// 			url: profiles.data[0]?.seo_og_image || "https://yourdomain.com/og-image.jpg",
		// 		},
		// 	],
		// },
	};
}


const SportResult = ({ params }: { params: { sport: string, year: string } }) => {

	return (
		<>
			<ResultComponent params={params} />
		</>
	);
};

export default SportResult;
