"use client";
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	IconButton,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { useState } from "react";
import { OverlayBox } from "./description.style";
import Image from "next/image";
import Iconify from "@/components/iconify";
import { API_URL } from "@/constants/api";
import { Link } from "@/components/footer/footer.style";

const DescriptionCard = ({ team }: { team: any }) => {
	const [open, setOpen] = useState(false);
	const theme = useTheme()
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ flex: 1, maxWidth: { sm: "32.2%", xs: '100%' }, minWidth: '20rem' }}>

			<OverlayBox backgroundImage={`${API_URL}/${team.image}`} className="overlay-animation">
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
				{team.name}
			</Typography>

			<Dialog
				sx={{
					"& .MuiDialog-paper": {
						boxShadow: "none",
						maxWidth: '720px'
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
					<Stack direction={{ xs: 'column', sm: 'row' }} gap={2}>

						<Box sx={{ flex: 1, margin: 'auto', height: 'fit-content', position: { sm: 'sticky', xs: 'relative' }, top: 0, marginTop: 0 }}>
							<Box sx={{ height: '20rem', position: 'relative', borderRadius: '1rem', overflow: 'hidden', mb: 1 }}>
								<Image src={`${API_URL}${team.image}`} layout="fill"
									objectFit="cover" alt='personality' />
							</Box>
							<Stack direction="row" justifyContent={'space-between'}>
								<Typography variant="h5" className="underlineAfter" mb={0.5}>{team.name}</Typography>
								{team.linkedin && <Link
									sx={{ color: theme.palette.secondary.main }}
									target="_blank"
									href={team.linkedin}
								>
									<Iconify icon={"bi:linkedin"} ml={0} />
								</Link>
								}
							</Stack>
							<Typography variant="h6">{team.designation}</Typography>

							<Typography variant="h6">
								{team.sporting_achivements}
							</Typography>

						</Box>
						<Box sx={{ flex: 1 }}>
							<Typography variant="body1">
								{team.about_them}
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
