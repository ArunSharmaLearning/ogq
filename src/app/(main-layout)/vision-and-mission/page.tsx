import callApi from "@/hooks/use-swr";
import { VisionAndMissionComponent } from "@/components/vision-mission";



export async function generateMetadata() {
	const { data: seo } = await callApi(`vission`);
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


const VisionAndMission = async () => {
	const { data: post } = await callApi("vission");
	return (
		<VisionAndMissionComponent data={post} />
	);
};

export default VisionAndMission;
