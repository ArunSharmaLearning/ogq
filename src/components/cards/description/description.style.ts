import React from "react";
import { Box, BoxProps, ThemedProps, styled } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { transform } from "next/dist/build/swc";
// Styled component for the overlay animation

interface OverlayBoxProps extends BoxProps {
  backgroundImage: string;
}

export const OverlayBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "backgroundImage",
})<OverlayBoxProps>(({ theme, backgroundImage }) => ({
  position: "relative",
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: "no-repeat",
  height: "15rem",
  width: "100%",
  backgroundPosition: "center center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  overflow: "hidden",
  cursor: "pointer",

  "& .overlay-text": {
    position: "absolute",
    opacity: 0,
    transition: "all 300ms ease 100ms",
    transform: "translate(-50%,-50%)",
    top: "30%",
    left: "50%",
  },

  "&:hover .overlay-text": {
    top: "50%",
    opacity: 1,
    zIndex: 3,
    width: "70%",
  },
}));
