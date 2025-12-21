import Banner from "@/components/banner/banner";
import callApi from "@/hooks/use-swr";
import { Box, Container, Typography } from "@mui/material";



export async function generateMetadata({ params }: { params: { program: string } }) {
	const { data: seo } = await callApi(`contact`);

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

const ContactUs = async () => {
	const { data: post, error } = await callApi('contact');

	return (
		<Box>
			<Banner image="editable/contact-1.jpg" text="Contact Us" />

			<Container>
				<Typography variant="h3" sx={{ mx: 'auto', width: 'fit-content', mb: 4 }} className="underlineAfter">
					Get in Touch with Us
				</Typography>
				<Box dangerouslySetInnerHTML={{ __html: post.content }}></Box>
			</Container>
		</Box>
	);
};

export default ContactUs;
