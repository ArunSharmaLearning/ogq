import Banner from "@/components/banner/banner";
import { Box, Container, Typography } from "@mui/material";

const History = () => {
	return (
		<Box>
			<Banner image="test.jpg" text="History" />

			<Container>

				<Typography >
					It was in the 1998 Asian Games that Geet Sethi, co-founder of OGQ, got
					first exposure to Indian sports, which form part of the Olympic
					platform. It was here that he saw at close quarters the problems faced
					by our athletes and the deficiencies of the entire system. 2 years
					later Geet was at a dinner hosted for the Indian contingent during the
					Sydney Olympics and the general feeling of dejection as a sporting
					nation was further reinforced as he interacted with the Indian
					athletes. The idea of OGQ was born in Geet’s mind on a flight from
					Sydney to Mumbai and Geet straight went to meet Prakash Padukone. Geet
					and Prakash realized that what Indian athletes needed was a 24×7
					presence of support staff that include, physiotherapists, dietitians,
					mental trainers, coaches, injury management experts and logistic
					managers around them to look after all their training needs and to
					instill in them a sense of pride and confidence. Two of them got
					together and started Olympic Gold Quest, a non-profit foundation, with
					a mission to help Indian athletes win Olympic gold medals. Later
					corporate honchos like Niraj Bajaj, Shitin Desai, R. Ramaraj, Rakesh
					Khanna and Neeraj Bharadwaj joined the team.
				</Typography>
			</Container>
		</Box>
	);
};

export default History;
