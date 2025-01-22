'use client'
import Banner from "@/components/banner/banner";
import Loading from "@/components/loader";
import { useAPI } from "@/hooks/use-swr";
import { Box, Container, Typography } from "@mui/material";


const ContactUs = () => {
	const { data: post, isLoading } = useAPI('contact');

	return (
		<Box>
			<Banner image="editable/contact.jpg" text="Contact Us" />

			<Container>
				{isLoading ?
					<Loading /> :
					<>
						<Typography variant="h3" sx={{ mx: 'auto', width: 'fit-content', mb: 4 }} className="underlineAfter">
							Get in Touch with Us</Typography>
						<Box dangerouslySetInnerHTML={{ __html: post.content }}></Box>
					</>
				}
			</Container>
		</Box>
	);
};

export default ContactUs;
