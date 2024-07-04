"use client";
import Banner from "@/components/banner/banner";
import Iconify from "@/components/iconify";
import {
	Box,
	Container,
	Dialog,
	DialogContent,
	IconButton,
	Stack,
	TextField,
	Typography,
	alpha,
	useTheme,
	styled,
	Button,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const Corporate = () => {
	const [open, setOpen] = useState(false);
	const theme = useTheme();

	// Function to handle the opening of the modal
	const handleClickOpen = () => {
		setOpen(true);
	};

	// Function to handle the closing of the modal
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box>
			<Banner image="test.jpg" text="CSR for Corporate" sx={{ mb: 10 }} />
			<Stack direction={{ xs: "column", sm: "row" }}>
				<Box
					sx={{
						flex: {
							xs: "0 0 100%",
							sm: "0 0 50%",
						},
						p: { xs: "5rem 3rem", sm: "10rem 4rem" },
						background: "white"
					}}
				>
					<Typography variant="h6">Join Us</Typography>
					<Typography variant="h3" sx={{ mb: 4 }}>
						Why Partner with Us?
					</Typography>
					<Stack direction={"column"} spacing={2}>
						<Stack direction={"row"} spacing={1} alignItems={"center"}>
							<Image
								height={40}
								width={40}
								alt="benefit"
								src={"/goodwill.png"}
							/>
							<Typography>
								Goodwill : Partner in a national cause of creating Olympic
								champions.
							</Typography>
						</Stack>

						<Stack direction={"row"} spacing={1} alignItems={"center"}>
							<Image
								height={40}
								width={40}
								alt="benefit"
								src={"/goodwill.png"}
							/>
							<Typography>
								Goodwill : Partner in a national cause of creating Olympic
								champions.
							</Typography>
						</Stack>

						<Stack direction={"row"} spacing={1} alignItems={"center"}>
							<Image
								height={40}
								width={40}
								alt="benefit"
								src={"/goodwill.png"}
							/>
							<Typography>
								Goodwill : Partner in a national cause of creating Olympic
								champions.
							</Typography>
						</Stack>
					</Stack>
				</Box>

				<Box
					sx={{
						display: 'flex',
						position: "relative",
						flex: {
							sm: "0 0 50%",
						},

						height: { xs: "95vh", sm: 'auto' },
						backgroundImage: "url(test.jpg)",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
					}}
				>
					<Box
						sx={{
							backgroundColor: alpha(theme.palette.secondary.dark, 0.8),
							width: "100%",
							height: '100%',
							position: "absolute",
							top: 0,
							left: 0,
							backgroundPosition: "center center",
							backgroundRepeat: "repeat",
						}}
					>
						<Box
							sx={{
								position: "absolute",
								backgroundPosition: "center center",
								backgroundRepeat: "repeat",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
							}}
						>
							<Iconify
								width={50}
								icon={"gridicons:play"}
								sx={{ color: theme.palette.primary.main, cursor: "pointer" }}
								ml={0}
								onClick={handleClickOpen}
							/>
						</Box>
					</Box>
				</Box>
			</Stack>
			<Stack direction={{ xs: "column", sm: "row" }}>
				<Box
					sx={{
						position: "relative",
						flex: {
							xs: "0 0 100%",
							sm: "0 0 50%",
						},
					}}
				>
					<Box sx={{ overflowY: "scroll", height: "600px" }}>
						<img
							src={"/ogq-report-final-2.jpg"}
							alt="sd"
							style={{ width: "100%" }}
						/>
						{/* <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
							<Image src={'/ogq-report-final-2.jpg'} alt="sfl" objectFit='contain'
								fill sizes="100%"  />
						</Box> */}
					</Box>
				</Box>

				<Box
					sx={{
						flex: {
							xs: "0 0 100%",
							sm: "0 0 50%",
						},
						p: { xs: "3rem 1.2rem", md: "5rem 4rem" },
						background: "white",
					}}
				>
					<Typography variant="h6" className="underlineAfter">
						Get in Touch
					</Typography>
					<Typography variant="h3" sx={{ mb: 4 }}>
						Contact Us
					</Typography>
					<Stack direction={"column"} spacing={2}>
						<Stack direction={{ xs: "column", md: 'row' }} gap={1}>
							<TextField placeholder="Name" fullWidth />
							<TextField placeholder="Phone Number" fullWidth />
						</Stack>
						<Stack direction={{ xs: "column", md: 'row' }} gap={1}>
							<TextField placeholder="Email" fullWidth />
							<TextField placeholder="Organization" fullWidth />
						</Stack>
						<TextField
							minRows={4}
							maxRows={4}
							multiline
							placeholder="Comments..."
						/>

						<Button
							sx={{ padding: "0.5rem 2rem", width: "fit-content" }}
							variant="contained"
						>
							Send
						</Button>
					</Stack>
				</Box >
			</Stack >
			<Dialog
				open={open}
				onClose={handleClose}
				maxWidth="md" // Adjust size as needed
				fullWidth
				sx={{ "& .MuiPaper-root": { overflow: "visible" } }}
			>
				<IconButton
					onClick={handleClose}
					sx={{ position: "absolute", top: -35, right: 0 }}
				>
					<Iconify
						sx={{ color: theme.palette.primary.main }}
						icon="maki:cross"
						ml={0}
					/>
				</IconButton>
				<iframe
					width="100%"
					height="500" // Adjust height as needed
					src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					style={{ borderRadius: "8px" }} // Optional styling
				/>
			</Dialog>
		</Box >
	);
};
export default Corporate;
