import Banner from "@/components/banner/banner"
import { Box, Container, Divider, Stack, Typography } from "@mui/material"
import Link from "next/link";

const ContactUs = () => {
	return (
		<Box>
			<Banner image="test.jpg" text="Contact Us" />

			<Container>
				<Box>
					<Typography variant='h5'>Olympic Gold Quest</Typography>
					<Typography >Olympic Gold Quest, 401, 5th floor, Anand Building, Ambedkar road, Bandra West, Mumbai - 400050</Typography>

					<Divider />
					<Typography>To contact us send emaul to:</Typography>
					<Typography variant="h6">For further query, please contact</Typography>

					<Stack maxWidth={'400px'}>
						<Stack direction='row' justifyContent={'space-between'}>
							<Typography variant='h5'>Yatin Bhatkar</Typography>
							<Box>
								Icon
								<Link href={'/ads'}>Link</Link>
							</Box>
						</Stack>
						<Stack direction='row' justifyContent={'space-between'}>
							<Typography variant='h5'>Yatin Bhatkar</Typography>
							<Box>
								Icon
								<Link href={'/ads'}>Link</Link>
							</Box>
						</Stack>

					</Stack>
				</Box>

			</Container>
		</Box>
	)
}

export default ContactUs;