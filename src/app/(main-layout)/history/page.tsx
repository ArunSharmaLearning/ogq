import Banner from "@/components/banner/banner";
import callApi from "@/hooks/use-swr";
import { Box, Container, Typography } from "@mui/material";



const History = async () => {

	const post = await callApi('/history');

	return (
		<Box>
			<Banner image="test.jpg" text="History" />

			<Container>

				<Box dangerouslySetInnerHTML={{ __html: post.content }}
				></Box>
			</Container>
		</Box>
	);
};

export default History;
