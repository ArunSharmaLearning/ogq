
import callApi from "@/hooks/use-swr";
import { AreaOfSupportComponent } from "@/components/area-of-support";



export async function generateMetadata() {
	const { data: seo } = await callApi("areas_of_support");
	// Use the first career's SEO fields if available, or fallback
	return {
		...(seo?.seo_meta_title && {
			title: seo.seo_meta_title,
		}),
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


const AreaOfSupport = async () => {
	const { data } = await callApi("areas_of_support");

	return (
		<AreaOfSupportComponent data={data} />
	);
};

export default AreaOfSupport;
