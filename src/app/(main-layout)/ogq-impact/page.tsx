import Banner from "@/components/banner/banner"
import DescriptionCard from "@/components/cards/description/description-card"
import callApi from "@/hooks/use-swr"
import { Container, Stack, Typography } from "@mui/material"

export async function generateMetadata() {
	const { data: seo } = await callApi(`ogq_impact`);

	return {
		...(seo?.title && {
			description: seo.title,
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


const OGQImpact = async () => {

	const { data } = await callApi('ogq_impact');

	return (
		<>
			<Banner image="editable/impact.jpg" text="OGQ Impact" />

			<Container>

				<Typography variant="h4" mb={4} className="underlineAfter">
					How OGQ made a difference
				</Typography>
				<Stack direction={'row'} flexWrap={'wrap'} columnGap={3} rowGap={1}>
					{data?.map((profile: any) =>
						<DescriptionCard key={profile.id} team={profile} />
					)}
				</Stack>
			</Container>

		</>
	)
}

export default OGQImpact