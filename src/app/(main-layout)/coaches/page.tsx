import { CoachesProgramComponent } from "@/components/coaches";
import callApi from "@/hooks/use-swr";

export async function generateMetadata() {
	const { data: seo } = await callApi('about-coaches');

	return {
		title: "Coaches Program | OGQ",

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


const CoachesProgram = () => {

	return (<CoachesProgramComponent />);
};

export default CoachesProgram;
