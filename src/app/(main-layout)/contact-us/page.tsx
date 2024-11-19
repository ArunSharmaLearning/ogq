import Banner from "@/components/banner/banner";
import callApi from "@/hooks/use-swr";
import { Box, Container } from "@mui/material";


const ContactUs = async () => {

	const post = await callApi('contact');

	return (
		<Box>
			<Banner image="editable/contact.jpg" text="CONTACT US" />

			<Container>
				<Box dangerouslySetInnerHTML={{ __html: post.content }}></Box>
			</Container>
		</Box>
	);
};

export default ContactUs;
