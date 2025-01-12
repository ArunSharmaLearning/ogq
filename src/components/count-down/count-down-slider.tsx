"use client";

import React from "react";
import Slider from "react-slick";

import { Box, Typography, useTheme } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountDown from "./count-down";
import { useResponsive } from "@/hooks/use-responsive";
import "./count-down-slider.scss";

const CountDownSlider = ({ sportEvents }) => {
	const theme = useTheme();

	const isMobile = useResponsive("down", "md");

	const isEventGoingOn = (sportEvent) => {
		const today = new Date();
		const eventStartDate = new Date(sportEvent?.start_date);

		if (today < eventStartDate) return false; // Event will start after sometime
		return true; // Event going on
	};
	const setting = {
		infinite: sportEvents?.length > 1,
		slidesToShow: sportEvents?.length > 1 ? 1 : 0,
		speed: 1000,
		autoplaySpeed: 4000,
		autoplay: sportEvents?.length > 1,
		dots: false,
		pauseOnHover: false,
		arrows: sportEvents?.length > 1,
	};

	return (
		<Box
			data-aos="fade-up"
			data-aos-delay={200}
			className="count-down-slider_container"
			sx={(theme) => ({
				"--color": theme.palette.primary.main,
				mb: 0,
			})}
		>
			<Slider {...setting}>
				{
					sportEvents?.map((sportEvent) => (
						<Box key={sportEvent.id}>
							<Typography sx={{ textAlign: "center", marginY: 4 }} variant="h3">
								{!isEventGoingOn(sportEvent) ? <>COUNTDOWN TO </> : <>CLOSING CEREMONY </>}
								{isMobile && <br />}
								<strong className="highlight">
									{sportEvent?.text.toUpperCase()}
								</strong>
							</Typography>
							<CountDown
								isEventGoingOn={isEventGoingOn(sportEvent)}
								eventDateTime={
									new Date(
										isEventGoingOn(sportEvent) ? sportEvent?.end_date : sportEvent?.start_date
									)
								}
								sx={{
									flexDirection: "row",
									maxWidth: isMobile ? "90%" : "100%",
									gap: isMobile ? theme.spacing(5) : theme.spacing(2),
									flexWrap: isMobile ? "wrap" : "no-wrap",
								}}
							/>
						</Box>
					))
				}
			</Slider>
		</Box>
	);
};

export default CountDownSlider;
