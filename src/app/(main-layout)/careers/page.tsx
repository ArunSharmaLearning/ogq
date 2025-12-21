// 'use client'

import Banner from "@/components/banner/banner";
import AnnouncementCard from "@/components/cards/announcement/announcement-card";
import { CarouselWrapper } from "@/components/carousel";
import Loading from "@/components/loader";
import callApi from "@/hooks/use-swr";
import {
	Box,
	Container,
	Typography,
} from "@mui/material";

// SEO metadata
export async function generateMetadata() {
	const { data: seo } = await callApi("announcement");
	// Use the first career's SEO fields if available, or fallback
	return {
		title: "Careers | OGQ",
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

const Career = async () => {

	const careers = await callApi("announcement");

	return (
		<Box>
			<Banner image="editable/career.jpg" text="CAREERS" />
			<Container>
				{!careers ?
					<Loading /> :
					<Box sx={{ mb: 5 }}>
						<Typography variant="h6">
							Take the Next Step in Your Career
						</Typography>
						<Typography variant="h3" mb={3} className="underlineAfter">
							Join Us
						</Typography>
						<CarouselWrapper arrows={true} slides={3}>
							{
								careers.data?.map((career) =>
									<AnnouncementCard key={career.id} image={career.image} link={career.url} />
								)
							}
						</CarouselWrapper>
					</Box>
				}
			</Container>
		</Box>
	);
};

export default Career;