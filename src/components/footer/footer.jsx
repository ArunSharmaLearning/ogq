import {
	Box,
	Typography,
	Stack,
	Container,
	List,
	TextField,
	InputAdornment,
	alpha,
} from "@mui/material";
import { Link, ListItem } from "./footer.style";
import Iconify from "../iconify";

const Footer = () => {
	return (
		<Box component="footer">
			<Box
				sx={(theme) => ({
					backgroundColor: "#22262a",
					py: { md: "5rem", xs: "2rem" },
				})}
			>
				<Container>
					<Stack direction={{ sm: "column", md: "row" }} gap={{ xs: 3, md: 5 }}>
						<Stack flex={1} data-aos="fade-up">
							<Box>
								<Typography
									color={"white"}
									className="underlineAfter"
									sx={{ mb: 1.2 }}
								>
									About us
								</Typography>
								<Typography color={"white"}>
									OGQ supports Indian athletes striving for Olympic Gold medals,
									backing 9 of India&apos;s 14 individual-sport medal winners in
									recent Olympic Games.
								</Typography>
							</Box>
						</Stack>

						<Stack flex={1} data-aos="fade-up" data-aos-delay={100}>
							<Box>
								<Typography
									className="underlineAfter"
									sx={{ mb: 1.2 }}
									color={"white"}
								>
									Links
								</Typography>
								<List sx={{ p: 0 }}>
									<ListItem>
										<Link href="/prevention-harassment">
											Preveniton of Harrassemnt
										</Link>
									</ListItem>
									<ListItem>
										<Link href="/faq">FAQ</Link>
									</ListItem>
									<ListItem>
										<Link href="/legal">Legal</Link>
									</ListItem>
								</List>
							</Box>
						</Stack>



						<Stack flex={1} data-aos="fade-up" data-aos-delay={300}>
							<Box>
								<Typography
									className="underlineAfter"
									sx={{ mb: 1.2 }}
									color={"white"}
								>
									Quick Links
								</Typography>

								<List sx={{ p: 0 }}>
									<ListItem>
										<Link href="/ogq-impact">Our Impact</Link>
									</ListItem>
									<ListItem>
										<Link href="/vision-and-mission">
											Vision and Mission
										</Link>
									</ListItem>
									<ListItem>
										<Link href="/areas-of-support">Area of Support</Link>
									</ListItem>
									<ListItem>
										<Link href="/olympics/archery">Olympics</Link>
									</ListItem>
									<ListItem>
										<Link href="/paralympics/archery">Paralympics</Link>
									</ListItem>
									<ListItem>
										<Link href="/junior/archery">Junior Scholorship</Link>
									</ListItem>

								</List>

							</Box>
						</Stack>

						<Stack flex={1} data-aos="fade-up" data-aos-delay={200}>
							<Box>
								<Typography
									className="underlineAfter"
									sx={{ mb: 1.2 }}
									color={"white"}
								>
									Social Links
								</Typography>
								<List sx={{ p: 0, display: "flex", gap: { xs: 1, sm: 3 } }}>
									<ListItem sx={{ width: "fit-content" }}>
										<Link
											target="_blank"
											href="https://www.facebook.com/olympicgoldquest"
										>
											<Iconify icon={"bi:meta"} ml={0} />
										</Link>
									</ListItem>
									<ListItem sx={{ width: "fit-content" }}>
										<Link
											target="_blank"
											href="https://www.youtube.com/user/olympicgoldquest"
										>
											<Iconify icon={"bi:youtube"} ml={0} />
										</Link>
									</ListItem>
									<ListItem sx={{ width: "fit-content" }}>
										<Link target="_blank" href="https://x.com/#!/OGQ_India">
											<Iconify icon={"pajamas:twitter"} ml={0} />
										</Link>
									</ListItem>
									<ListItem sx={{ width: "fit-content" }}>
										<Link
											target="_blank"
											href="https://www.instagram.com/olympicgoldquest/"
										>
											<Iconify icon="mdi:instagram" ml={0} />
										</Link>
									</ListItem>
								</List>
							</Box>
						</Stack>
					</Stack>
				</Container>
			</Box>
			<Box backgroundColor="#22262a">
				<Container>
					<Stack
						justifyContent={{ sm: "space-evenly", xs: 'space-between' }}
						alignItems={"center"}
						direction="row"
					>
						<Typography variant="body2" color={'white'}>All Rights Reserved</Typography>
						<Typography variant="body2" color={'white'}>
							Copyright 2020 © Olympic Gold Quest
						</Typography>
						<Typography variant="body2" color={'white'}>
							OGQ&apos;s In-House Maintenance
						</Typography>
					</Stack>
				</Container >
			</Box >
		</Box >
	);
};

export default Footer;
