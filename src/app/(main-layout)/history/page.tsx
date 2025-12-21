import Banner from "@/components/banner/banner"
import callApi from "@/hooks/use-swr";
import { Box, Container, Typography } from "@mui/material";


export async function generateMetadata() {
	const { data: seo } = await callApi("history");
	// Use the first career's SEO fields if available, or fallback
	return {
		title: "History | OGQ",
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

const History = async () => {

	const { data } = await callApi('history');

	return (
		<Box>
			<Banner image="editable/history.jpg" text="HISTORY" />
			<Container>
				<Typography variant="h4" className="underlineAfter">
					Transforming Indian Athlete Support</Typography>
				<Box dangerouslySetInnerHTML={{ __html: data?.content }}></Box>
			</Container>
		</Box>
	);
};

export default History;