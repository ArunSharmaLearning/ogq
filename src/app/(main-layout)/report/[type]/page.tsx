import { AnnualReport } from "@/components/report-client";

export async function generateStaticParams() {
	return [
		{ type: 'performance' },
		{ type: 'investor-return' },
	];
}


export async function generateMetadata({ params }: { params: { type: string } }) {
	// const { data: profiles } = await callApi(params.sports);
	// You can customize these fields based on your API response

	const type =
		params.type.charAt(0).toUpperCase() + params.type.slice(1);

	return {
		title: `${type} report | OGQ`,
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


const Report = ({ params }: { params: { type: string } }) => {
	return (
		<AnnualReport params={params} />
	);
};

export default Report;
