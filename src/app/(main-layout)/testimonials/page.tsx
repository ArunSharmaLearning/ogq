"use client";

import Banner from "@/components/banner/banner";
import { CarouselWrapper } from "@/components/carousel";
import Iconify from "@/components/iconify";
import Loading from "@/components/loader";
import { API_URL } from "@/constants/api";
import { useAPI } from "@/hooks/use-swr";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const Testimonial = () => {

	const { data: testimonials, isLoading } = useAPI("testimonial");
	return (
		<Box mb={4}>
			<Banner image="editable/testimonial.jpg" text="TESTIMONIAL" />

			<Container>
				<Typography
					variant="h3"
					className="underlineAfter"
					sx={{ mx: "auto", width: "fit-content" }}
					mb={4}
				>
					What People Are Saying
				</Typography>
				<CarouselWrapper arrows={true}>
					{!isLoading ? testimonials.map((testimonial) =>
						<Box
							className="slide_image"
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}}
							key={testimonial.id}
						>
							<Box
								sx={{
									position: "relative",
									width: 160, // Set the width of the Box
									height: 160, // Set the height of the Box
								}}
							>
								<Image unoptimized={true} priority
									layout="fill"
									src={`${API_URL}/${testimonial.image}`}
									objectFit="cover"
									alt={testimonial.name}
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
								{testimonial.name}
							</Typography>
							<Typography variant="h5" className="underlineAfter" mb={1}>
								{testimonial.caption}
							</Typography>
							<Typography variant="body1">
								{testimonial.extra_info}
							</Typography>
						</Box>) :
						<Loading />
					}
				</CarouselWrapper>
			</Container>
		</Box>
	);
};

export default Testimonial;