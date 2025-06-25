import Banner from "@/components/banner/banner";
import callApi, { useAPI } from "@/hooks/use-swr";
import { Box, Container, Typography } from "@mui/material";


const History = async () => {
	const { data } = await callApi('history');

	return (
		<Box>
			<Banner image="editable/history.jpg" text="HISTORY" />
			<Container>
				<Typography variant="h4" className="underlineAfter">
					Transforming Indian Athlete Support</Typography>
				{data && data?.content && <Box dangerouslySetInnerHTML={{ __html: data?.content }}></Box>}
			</Container>
		</Box>
	);
};

export default History;
