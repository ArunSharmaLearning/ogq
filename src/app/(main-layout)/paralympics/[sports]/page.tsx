import { SportComponent } from "@/components/sports";
import callApi from "@/hooks/use-swr";


export async function generateStaticParams() {
	const sports = await callApi('sports_in_navbar');
	return sports.data.paralympics.flatMap((sport) => ([
		{ sports: sport.replaceAll(' ', '%20') },
		{
			sports: sport
		}]));
}


export async function generateMetadata({ params }: { params: { sports: string } }) {
	const { data: seo } = await callApi(params.sports);
	// You can customize these fields based on your API response

	const sport =
		params.sports.charAt(0).toUpperCase() + params.sports.slice(1);

	return {
		title: `Paralympics ${sport} Athletes | OGQ`,
		...(seo?.seo_meta_description && {
			description: seo.seo_meta_description,
		}),

		...(seo?.seo_canonical_uri && {
			alternates: {
				canonical: seo.seo_canonical_uri,
			},
		}),

		openGraph: {
			...(seo?.seo_meta_title && {
				title: seo.seo_meta_title,
			}),

			...(seo?.seo_meta_description && {
				description: seo.seo_meta_description,
			}),

			...(seo?.seo_canonical_uri && {
				url: seo.seo_canonical_uri,
			}),

			type: "website",

			...(seo?.seo_og_image && {
				images: [{ url: seo.seo_og_image }],
			}),
		},
	};
}


const OlympicSport = ({ params }: { params: { sports: string } }) => {
	return (
		<>
			<SportComponent params={params} category="paralympics" />
		</>
	);
}

export default OlympicSport