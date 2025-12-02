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

async function fetchCareers() {
	const res = await callApi("announcement");
	console.log('careers data', res);
	if (res.error) return [];
	return res.data;
}

// SEO metadata
export async function generateMetadata() {
	const careers = await fetchCareers();
	// Use the first career's SEO fields if available, or fallback
	return {
		title: careers?.[0]?.seo_meta_title,
		description: careers?.[0]?.seo_meta_description || "Take the next step in your career with OGQ.",
		alternates: {
			canonical: careers?.[0]?.seo_canonical_uri || "https://yourdomain.com/careers",
		},
		openGraph: {
			title: careers?.[0]?.seo_meta_title || "Careers - OGQ",
			description: careers?.[0]?.seo_meta_description || "Take the next step in your career with OGQ.",
			url: careers?.[0]?.seo_canonical_uri || "https://yourdomain.com/careers",
			type: "website",
			images: [
				{
					url: careers?.[0]?.seo_og_image || "https://yourdomain.com/og-image.jpg",
				},
			],
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