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
			<Box sx={(theme) => ({ backgroundColor: '#22262a', py: { md: '5rem', xs: '2rem' } })}>
				<Container>

					<Stack direction={{ 'sm': "column", 'md': 'row' }} gap={3} >
						<Stack flex={1} data-aos="fade-up" >
							<Box>
								<Typography color={'white'} className="underlineAfter" sx={{ mb: 1.2 }}>About us</Typography>
								<Typography color={'white'}>
									Our firm is one of the world&apos;s leading management consulting
									firms. We work with top executives to help them make better
									decisions.
								</Typography>
							</Box>
						</Stack>

						<Stack flex={1} data-aos="fade-up" data-aos-delay={100}>
							<Box>
								<Typography className="underlineAfter" sx={{ mb: 1.2 }} color={'white'}>Links</Typography>
								<List sx={{ p: 0 }}>
									<ListItem ><Link href='ad'>Preveniton of Harrassemnt</Link></ListItem>
									<ListItem ><Link href='ad'>Preveniton of Harrassemnt</Link></ListItem>
									<ListItem><Link href='ad'>Preveniton of Harrassemnt</Link></ListItem>
									<ListItem><Link href='ad'>Preveniton of Harrassemnt</Link></ListItem>
								</List>
							</Box>
						</Stack>

						<Stack flex={1} data-aos="fade-up" data-aos-delay={200}>
							<Box>
								<Typography className="underlineAfter" sx={{ mb: 1.2 }} color={'white'}>Social Links</Typography>
								<List sx={{ p: 0 }}>
									<ListItem><Link href="sdkl">Kicje</Link></ListItem>
									<ListItem><Link href="sdkl">Youtube</Link></ListItem>
									<ListItem><Link href="sdkl">Twitter</Link></ListItem>
									<ListItem><Link href="sdkl">Twitter</Link></ListItem>
								</List>
							</Box>
						</Stack>

						<Stack flex={1} data-aos="fade-up" data-aos-delay={300}>
							<Box>
								<Typography className="underlineAfter" sx={{ mb: 1.2 }} color={'white'}>Newsletter</Typography>
								<Typography sx={{ mb: 1 }} color={'white'}>
									Subscribe to get monthly Updates. We promise not to spam you
								</Typography>

								<TextField
									placeholder="Email"
									sx={(theme) => ({
										'& .MuiOutlinedInput-root': {
											color: theme.palette.common.white,
											'& fieldset': {
												borderColor: theme.palette.common.white,
											},
											'&:hover': {
												'& fieldset': {
													borderColor: theme.palette.primary.main,
												},
											}
										}
									})}
									InputProps={{
										endAdornment: (
											<InputAdornment position="start" sx={{ cursor: 'pointer' }}><Iconify color={"white"} icon="fluent:send-24-filled" /></InputAdornment>
										),
									}}
								/>
							</Box>
						</Stack>
					</Stack>
				</Container>
			</Box>
			<Stack
				justifyContent={"center"}
				alignItems={"center"}
				backgroundColor="white"
			>
				<Typography > All rights reserved</Typography>
			</Stack>
		</Box >
	);
};

export default Footer;
