'use client'
import Banner from "@/components/banner/banner";
import Loading from "@/components/loader";
import { useAPI } from "@/hooks/use-swr";
import { Box, Container, Typography } from "@mui/material";

const History = () => {

	const { data, isLoading } = useAPI('history');
	
	return (
		<Box>
			<Banner image="editable/history.jpg" text="HISTORY" />
			<Container>
				{isLoading ?
					<Loading /> :
					<>
						<Typography variant="h4" className="underlineAfter">
							Transforming Indian Athlete Support</Typography>
						<Box dangerouslySetInnerHTML={{ __html: data?.content }}></Box>
					</>
				}
			</Container>
		</Box>
	);
};

export default History;