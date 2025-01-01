import Banner from "@/components/banner/banner";
import callApi from "@/hooks/use-swr";
import { Box, Container, Typography } from "@mui/material";



const History = async () => {

	const { error, data } = await callApi('history');
	return (
		<Box>
			<Banner image="editable/history.jpg" text="History" />
			<Container>
				<Typography variant="h4" className="underlineAfter">
					Transforming Indian Athlete Support</Typography>
				{!error && <Box dangerouslySetInnerHTML={{ __html: data.content }}
				></Box>}
			</Container>
		</Box>
	);
};

export default History;
