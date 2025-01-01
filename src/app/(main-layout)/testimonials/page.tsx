"use client";
import Banner from "@/components/banner/banner";
import { CarouselWrapper } from "@/components/carousel";
import Iconify from "@/components/iconify";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const Testimonial = () => {
	return (
		<Box mb={4}>
			<Banner image="editable/testimonials.jpg" text="TESTIMONIAL" />

			<Container>
				<Typography
					variant="h3"
					className="underlineAfter"
					sx={{ mx: "auto", width: "fit-content" }}
					mb={4}
				>
					What People Are Saying
				</Typography>
				<CarouselWrapper>
					<Box
						className="slide_image"
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}
						key={1}
					>
						<Box
							sx={{
								position: "relative",
								width: 160, // Set the width of the Box
								height: 160, // Set the height of the Box
							}}
						>
							<Image
								layout="fill"
								src={`/carousel.jpg`}
								objectFit="cover"
								alt="sponsor"
							/>

							<Box
								component="span"
								sx={(theme) => ({
									position: "absolute",
									bottom: "0",
									backgroundColor: theme.palette.primary.main,
									borderRadius: "50%",
									right: "8px",
									color: theme.palette.common.white,
									zIndex: 2,
									padding: "2px 4px",
								})}
							>
								<Iconify icon="fa6-solid:quote-right" ml={0} />
							</Box>
						</Box>

						<Typography variant="h4" mb={0}>
							Sharda Ugra
						</Typography>
						<Typography variant="h5" className="underlineAfter" mb={1}>
							Manager
						</Typography>
						<Typography variant="body1">
							The best thing about OGQ is that this organization consists of
							India’s top sports icons like Geet Sethi and Prakash Padukone. And
							now you have Viren Rasquinha as the CEO who himself has played
							hockey at the Athens Olympics and is a former captain. They all
							know what it takes to play sports at the highest level and what
							struggles an athlete has to undergo. This makes OGQ different from
							other organizations and this is the primary reason why I decided
							to join them
						</Typography>
					</Box>
					<Box
						className="slide_image"
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}
						key={2}
					>
						<Box
							sx={{
								position: "relative",
								width: 160, // Set the width of the Box
								height: 160, // Set the height of the Box
							}}
						>
							<Image
								layout="fill"
								src={`/carousel.jpg`}
								objectFit="cover"
								alt="sponsor"
							/>

							<Box
								component="span"
								sx={(theme) => ({
									position: "absolute",
									bottom: "0",
									backgroundColor: theme.palette.primary.main,
									borderRadius: "50%",
									right: "8px",
									color: theme.palette.common.white,
									zIndex: 2,
									padding: "2px 4px",
								})}
							>
								<Iconify icon="fa6-solid:quote-right" ml={0} />
							</Box>
						</Box>

						<Typography variant="h4" mb={0}>
							Sharda Ugra
						</Typography>
						<Typography variant="h5" className="underlineAfter" mb={1}>
							Manager
						</Typography>
						<Typography variant="body1">
							The best thing about OGQ is that this organization consists of
							India’s top sports icons like Geet Sethi and Prakash Padukone. And
							now you have Viren Rasquinha as the CEO who himself has played
							hockey at the Athens Olympics and is a former captain. They all
							know what it takes to play sports at the highest level and what
							struggles an athlete has to undergo. This makes OGQ different from
							other organizations and this is the primary reason why I decided
							to join them
						</Typography>
					</Box>
				</CarouselWrapper>
			</Container>
		</Box>
	);
};

export default Testimonial;
