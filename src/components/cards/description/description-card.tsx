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

			<OverlayBox cursor="pointer" backgroundImage={`${API_URL}/${team.image}`} className="overlay-animation">
				<span className="overlay-text" onClick={() => handleClickOpen()}>
					<Iconify sx={{
						'&:hover': {
							color: theme.palette.primary.main
						}
					}} width={34} icon="gg:add" />
				</span>
			</OverlayBox>
			<Stack direction={'column'} sx={{
				textAlign: 'center',
				backgroundColor: '#F9FAFB',
				boxShadow: '0 0 2rem 0 rgba(0, 0, 0, 0.1)',
				padding: '0.8rem 0.5rem',
				transform: 'translateY(-50%)',
				width: '85%',
				margin: 'auto',
				py: 0.8
			}}>
				<Typography
					sx={{
						fontSize: {
							xs: '1.1rem',    // default for extra-small screens
							sm: '1.3rem',  // small screens and up
						},
					}}
					variant="h5"
				>{team.name}</Typography>
				<Typography variant="h5" sx={(theme) => ({ color: theme.palette.primary.main })}>{team.designation}</Typography>
			</Stack>
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
							<Box sx={{ height: '20rem', minWidth: { xs: '16rem', sm: '18rem' }, position: 'relative', borderRadius: '1rem', overflow: 'hidden', mb: 1 }}>
								<Image unoptimized={true} priority src={`${API_URL}${team.image}`} layout="fill"
									objectFit="cover" alt={team.name} />
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
							<Typography variant="h6">{team.qualification}</Typography>

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
				</DialogContent>
			</Dialog>

		</Box >
	);
};

export default DescriptionCard;
