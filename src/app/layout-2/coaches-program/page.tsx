import Banner from "@/components/banner/banner";
import { Box, Container, Typography } from "@mui/material";

const CoachesProgram = () => {
	return (
		<Box>
			<Banner image="test.jpg" text="Coaches Program" />

			<Container>

				<Typography >
					It was in the 1998 Asian Games that Geet Sethi, co-founder of OGQ, got
					a mission to help Indian athletes win Olympic gold medals. Later
					corporate honchos like Niraj Bajaj, Shitin Desai, R. Ramaraj, Rakesh
					Khanna and Neeraj Bharadwaj joined the team.
				</Typography>
			</Container>
		</Box>
	);
};

export default CoachesProgram;
