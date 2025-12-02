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
 async function fetchProfiles(param: string) {
	const res = await callApi(`junior?sport=${param}`);
	const sports = await res;
	return sports
}

export async function generateMetadata({ params }: { params: { sports: string } }) {
	const profiles = await fetchProfiles(params.sports);
	// You can customize these fields based on your API response
	return {
		title: profiles.data[0]?.seo_meta_title || `${JSON.stringify(profiles)} - Junior | OGQ`,
		description: profiles.data[0]?.seo_meta_description || `Explore junior athletes for ${params.sports} at OGQ.`,
		alternates: {
			canonical: profiles.data[0]?.seo_canonical_uri || `https://yourdomain.com/junior/${params.sports}`,
		},
		openGraph: {
			title: profiles.data[0]?.seo_meta_title || `${params.sports} - Junior | OGQ`,
			description: profiles.data[0]?.seo_meta_description || `Explore junior athletes for ${params.sports} at OGQ.`,
			url: profiles.data[0]?.seo_canonical_uri || `https://yourdomain.com/junior/${params.sports}`,
			type: "website",
			images: [
				{
					url: profiles.data[0]?.seo_og_image || "https://yourdomain.com/og-image.jpg",
				},
			],
		},
	};
}

const JuniorSport = async ({ params }: { params: { sports: string } }) => {
	const profiles = await fetchProfiles(params.sports);
	return (
		<>
			<SportComponent params={params} category="junior" />
		</>
	);
};

export default JuniorSport;
