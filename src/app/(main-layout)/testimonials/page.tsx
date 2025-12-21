import Banner from "@/components/banner/banner";
import { CarouselWrapper } from "@/components/carousel";
import Iconify from "@/components/iconify";
import Loading from "@/components/loader";
import { TestimonialComponent } from "@/components/testimonial";
import { API_URL } from "@/constants/api";
import callApi, { useAPI } from "@/hooks/use-swr";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export async function generateMetadata() {
	const { data: seo } = await callApi(`testimonial`);
	return {
		title: "Testimonials | OGQ",
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


const Testimonial = async () => {

	const { data: testimonials } = await callApi(`testimonial`);

	return (
		<TestimonialComponent data={testimonials} />
	)
};

export default Testimonial;