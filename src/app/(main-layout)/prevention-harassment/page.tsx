import Banner from "@/components/banner/banner";
import { Link } from "@/components/footer/footer.style";
import { Box, Container, Typography } from "@mui/material";

const PreventionHarassment = async () => {
	return (
		<Box>
			<Banner image="test.jpg" text="Prevention of Sexual Harassment" />

			<Container>
				<Typography variant="h4" className="underlineAfter">
					OGQ’s Policy on Prevention of Sexual Harassment
				</Typography>
				<Typography variant="body1">
					OGQ strives to provide a safe working place for all and thus a policy
					on Prevention of Sexual Harassment has been formulated. All
					stakeholders of OGQ are under the ambit of the policy and thus should
					comply to its rules and regulations. The policy applies for both male
					and females of all age groups. According to the policy, The Internal
					Complaints Committee is responsible to receive complaints, inquire
					into the complaint and provide redressal thereupon.
				</Typography>
				<Link sx={{ color: 'black', width: 'fit-content' }} target="_blank" href="https://ogq.org/pdf/OGQ_POSH_Policy_May2022.pdf">Please go through the policy for further details.</Link>
			</Container>
		</Box>
	);
};

export default PreventionHarassment;
