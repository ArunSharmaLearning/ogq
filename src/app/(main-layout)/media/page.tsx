import Banner from "@/components/banner/banner";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const History = () => {
	return (
		<Box>
			<Banner image="test.jpg" text="Olympic Gold Quest In Media" />

			<Container>
				<Stack direction='column' spacing={2}>
					<Stack direction={'row'} spacing={2}>
						<Box>
							<Image priority src={'/test.jpg'} width={194} height={100} alt='news' />
						</Box>
						<Stack justifyContent={'start'}>
							<Box>
								<Typography variant='h6'>Olympic Gold Quest has acted as a catalyst in my career: Gagan Narang
								</Typography>

								<Link href={'https://www.google.com'}>Read More</Link>
							</Box>
						</Stack>
					</Stack>

					<Divider />
					<Stack direction={'row'} spacing={2}>
						<Box>
							<Image priority src={'/test.jpg'} width={194} height={100} alt='news' />
						</Box>
						<Stack justifyContent={'start'} >
							<Box>
								<Typography variant='h6'>Olympic Gold Quest has acted as a catalyst in my career: Gagan Narang
								</Typography>

								<Link href={'https://www.google.com'}>Read More</Link>
							</Box>
						</Stack>
						<Divider />
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default History;
