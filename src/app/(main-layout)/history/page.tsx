import Banner from "@/components/banner/banner";
import callApi from "@/hooks/use-swr";
import { Box, Container, Typography } from "@mui/material";



const History = async () => {

	const { error, content } = await callApi('history');

	return (
		<Box>
			<Banner image="editable/history.jpg" text="History" />
			<Container>
				{!error && <Box dangerouslySetInnerHTML={{ __html: content }}
				></Box>}
			</Container>
		</Box>
	);
};

export default History;
