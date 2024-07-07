"use client";

import React from "react";
import Slider from "react-slick";

import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnnouncementCard from "../cards/announcement";

const Announcement = ({ announcements }) => {
	const setting = {
		infinite: true,
		slidesToShow: 3,
		speed: 1000,
		autoplaySpeed: 4000,
		autoplay: true,
		dots: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	};

	return (
		<Box data-aos="fade-up" data-aos-delay={200} className="announcement_container" sx={(theme) => ({ '--color': theme.palette.primary.main })}>
			<Slider {...setting} >
				{
					announcements.map((announcement) =>
						<AnnouncementCard key={announcement.id} image={announcement.image} link={announcement.url} />
					)
				}
			</Slider >
		</Box >
	);
};

export default Announcement;