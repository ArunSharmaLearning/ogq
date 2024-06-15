"use client";
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { useState } from "react";
import { OverlayBox } from "./description.style";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Iconify from "@/components/iconify";

const DescriptionCard = () => {
	const [open, setOpen] = useState(false);
	const theme = useTheme()
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ flex: 1, maxWidth: "32%", minWidth: '20rem' }}>

			<OverlayBox backgroundImage="/test.jpg" className="overlay-animation">
				<span className="overlay-text" onClick={() => handleClickOpen()}>
					<Iconify sx={{
						'&:hover': {
							color: theme.palette.primary.main
						}
					}} width={34} icon="gg:add" />
				</span>
			</OverlayBox>

			<Typography
				sx={{
					textAlign: "center",
					backgroundColor: theme.palette.common.white,
					boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.1)",
					padding: "1rem",
					transform: "translateY(-50%)",
					width: "85%",
					margin: "auto",
				}}
				variant="h5"
			>
				Content
			</Typography>

			<Dialog
				sx={{
					"& .MuiDialog-paper": {
						boxShadow: "none",
						maxWidth: '800px'
					},
				}}
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogActions sx={{ textAlign: "end" }}>
					<IconButton sx={{ color: theme.palette.primary.main }} onClick={handleClose}><Iconify ml={0} width={26} icon="material-symbols:close" /></IconButton>
				</DialogActions>


				<DialogContent sx={{

				}}>
					<Stack direction={'row'} spacing={2}>

						<Box sx={{ flex: 1, margin: 'auto' }}>
							<Box sx={{ height: '20rem', position: 'relative', borderRadius: '1rem', overflow: 'hidden' }}>
								<Image src={'/test.jpg'} layout="fill"
									objectFit="cover" alt='personality' />
							</Box>

							<Typography variant="h6">Co founder</Typography>
							<Typography variant="h5">Geet Sethi</Typography>
							<Typography variant="h6">
								Former All England Champion and
							</Typography>
							<Typography variant="h6">World Number 1</Typography>

						</Box>
						<Box sx={{ flex: 1 }}>
							<Typography component={"p"}>
								Known as the ‘Gentle Tiger’ on court, Prakash Padukone, is the
								first Indian to reach the top of the World Badminton honours by
								winning the All England Championship in 1980. Born on June 10th
								1956 he won his first National Men’s singles at the Indian
								Nationals when he was only 15 years old (he also won the Juniors
								title at that Nationals). He won the Nationals 9 years in a row
								from 1971 till 1979 and did not play at the nationals again till
								1989. At the Commonwealth games in 1978, he was the gold
								medalist. 1980 was his best year, in the months leading up to
								the All-England, he dominated the top European players,
								consistently beating Fleming Delfs, Morten Frost Hansen and
								Svend Pri (all All-England champions themselves), and won the
								Danish Open and the Swedish Open. Seeded third at the
								All-England, he beat Morten Frost in the semifinals and Liem
								Swie King in the finals in straight games title at that Nationals). He won the Nationals 9 years in a row
								from 1971 till 1979 and did not play at the nationals again till
								1989. At the Commonwealth games in 1978, he was the gold
								medalist. 1980 was his best year, in the months leading up to
								the All-England, he dominated the top European players,
								consistently beating Fleming Delfs, Morten Frost Hansen and
								Svend Pri (all All-England champions themselves), and won the
								Danish Open and the Swedish Open. Seeded third at the
								All-England, he beat Morten Frost in the semifinals and Liem
								Swie King in the finals in straight games
							</Typography>
						</Box>



					</Stack>
					{/* <DialogContentText id="alert-dialog-description">
						Let Google help apps determine location. This means sending anonymous
						location data to Google, even when no apps are running.
					</DialogContentText> */}
				</DialogContent>
			</Dialog>

		</Box >
	);
};

export default DescriptionCard;
