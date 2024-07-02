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
					<Stack direction={{ sm: "column", md: "row" }} gap={3}>
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

						<Stack flex={1} data-aos="fade-up" data-aos-delay={300}>
							<Box>
								<Typography
									className="underlineAfter"
									sx={{ mb: 1.2 }}
									color={"white"}
								>
									Newsletter
								</Typography>
								<Typography sx={{ mb: 1 }} color={"white"}>
									Subscribe to get monthly Updates. We promise not to spam you
								</Typography>

								<TextField
									placeholder="Email"
									sx={(theme) => ({
										"& .MuiOutlinedInput-root": {
											color: theme.palette.common.white,
											paddingBottom: 0,
											"& fieldset": {
												borderColor: theme.palette.common.white,
											},
											"&:hover": {
												"& fieldset": {
													borderColor: theme.palette.primary.main,
												},
											},
										},
									})}
									InputProps={{
										endAdornment: (
											<InputAdornment
												position="start"
												sx={{ cursor: "pointer" }}
											>
												<Iconify color={"white"} icon="fluent:send-24-filled" />
											</InputAdornment>
										),
									}}
								/>
							</Box>
						</Stack>
					</Stack>
				</Container>
			</Box>
			<Box backgroundColor="white">
				<Container>
					<Stack
						justifyContent={{ sm: "space-evenly", xs: 'space-between' }}
						alignItems={"center"}
						direction="row"
					>
						<Typography variant="body2">All Rights Reserved</Typography>
						<Typography variant="body2">
							Copyright 2020 © Olympic Gold Quest
						</Typography>
						<Typography variant="body2">
							OGQ&apos;s In-House Maintenance
						</Typography>
					</Stack>
				</Container >
			</Box >
		</Box >
	);
};

export default Footer;
