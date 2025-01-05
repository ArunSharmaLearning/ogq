"use client";

import React from "react";
import Slider from "react-slick";

import { Box, Typography } from "@mui/material";

import "./CarouselWrapper.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselWrapper = ({ children, slides = 1 }) => {
  const setting = {
    infinite: children?.length > 1,
    slidesToShow: children?.length > 1 ? slides : 0,
    speed: 1000,
    autoplaySpeed: 4000,
    autoplay: children?.length > 1,
    dots: false,
    pauseOnHover: false,
    arrows: children?.length > 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          navigation: false,
          dots: false,
        }
      },
    ]
  };

  return (
    <Box className="carouselwrapper_container" sx={(theme) => ({ '--color': theme.palette.primary.main, mb: { xs: 4, sm: 0 } })}>
      <Slider {...setting}
      >
        {React.Children.map(children, (child) => (
          <Box>{child}</Box>
        ))}
      </Slider >
    </Box >
  );
};

export default CarouselWrapper;
