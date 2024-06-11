import Banner from "@/components/banner/banner";
import DonationIndiaOne from "@/components/forms/donation/donation-india-one";
import DonationUsa from "@/components/forms/donation/donation-usa";
import DonationIndiaRecurring from "@/components/forms/donation/dontaion-india-recurring";
import { Container, Stack, Typography } from "@mui/material";


const DontateNow = () => {

	return (
		<>
			<Banner image="test.jpg" text="Donate Now" />

			<Container>
				<Typography variant="h4" sx={{ textAlign: 'center', mb: 7 }}>
					With your support, we can help more of India&apos;s best athletes
					achieve their <br /> dreams of winning an Olympic Gold medal.
				</Typography>

				<Stack direction={'column'} spacing={5}>
					<Stack direction={'row'} spacing={2}>
						<DonationIndiaOne />
						<DonationUsa />
					</Stack>
					<DonationIndiaRecurring />
				</Stack>
			</Container >
		</>
	);
};

export default DontateNow;
