import Banner from "@/components/banner/banner";
import AnnouncementCard from "@/components/cards/announcement/announcement-card";
import { CarouselWrapper } from "@/components/carousel";
import callApi, { useAPI } from "@/hooks/use-swr";
import {
	Box,
	Container,
	Stack,
	Typography,
} from "@mui/material";

const Career = async () => {
	<Banner image="test.jpg" text="CSR for Corporate" />
	const { data: careers } = await callApi("announcement");

	return (
		<Box>
			<Banner image="editable/career.jpg" text="CAREERS" />
			<Container>
				<Box sx={{ mb: 5 }}>
					<Typography variant="h6">
						Take the Next Step in Your Career
					</Typography>
					<Typography variant="h3" mb={3} className="underlineAfter">
						Join Us
					</Typography>
					<CarouselWrapper slides={3}>
						{
							careers?.map((career) =>
								<AnnouncementCard key={career.id} image={career.image} link={career.url} />
							)
						}
					</CarouselWrapper>
				</Box>
			</Container>
		</Box>
	);
};

export default Career;
