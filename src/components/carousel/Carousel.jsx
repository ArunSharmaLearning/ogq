import React from "react";

import { Stack } from "@mui/material";


import Carousel from "react-bootstrap/Carousel";

import { StyledButtonLink } from "./Carousel.style";
import { API_URL } from "@/constants/api";
import { StyledLink } from "../common/Styles";

import "./Carousel.scss";
const ControlledCarousel = ({ data }) => {

  return (
    <Carousel className="mainPage_carousel" interval={4000} pause={false} indicators={false}>
      {data && data.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            loading="lazy"
            className="d-block w-100"
            src={`${API_URL}${item.image}`}
            style={{ height: "100%", filter: "brightness(75%)" }}
            alt="Pre Slide"
          />

          <Carousel.Caption className="carousel_caption">
            <h3 className="float-animation">
              {/* {"Integrity, Liberity, Freedom & Prosperity"} */}
              {item.title}
            </h3>
            <div className="dropdown">
              <Stack direction={"row"} className="">
                {/* <StyledButtonLink href={"/dnew"}>{"Know More"}</StyledButtonLink> */}

                <StyledButtonLink href={"/dnew"}>{"Donate Now"}</StyledButtonLink>
              </Stack>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ControlledCarousel;
