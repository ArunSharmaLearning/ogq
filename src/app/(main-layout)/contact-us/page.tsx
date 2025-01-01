import Banner from "@/components/banner/banner";
import callApi from "@/hooks/use-swr";
import { Box, Container, Typography } from "@mui/material";


const ContactUs = async () => {

	const { data: post } = await callApi('contact');

	return (
		<Box>
			<Banner image="editable/contact.jpg" text="CONTACT US" />

			<Container>
				<Typography variant="h3" sx={{ mx: 'auto', width: 'fit-content', mb: 4 }} className="underlineAfter">
					Get in Touch with Us</Typography>

				<Box dangerouslySetInnerHTML={{ __html: post.content }}></Box>
			</Container>
		</Box>
	);
};

export default ContactUs;
