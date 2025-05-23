import React from "react";
import { Box, BoxProps, ThemedProps, styled } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { transform } from "next/dist/build/swc";
// Styled component for the overlay animation

interface OverlayBoxProps extends BoxProps {
  backgroundImage: string;
  cursor?: string;
}

export const OverlayBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "backgroundImage" && prop !== "cursor",
})<OverlayBoxProps>(({ theme, backgroundImage, cursor = "default" }) => ({
  position: "relative",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "22rem",
  width: "100%",
  backgroundPosition: "center center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  overflow: "hidden",
  cursor: cursor,

  "& .overlay-text": {
    position: "absolute",
    opacity: 0,
    transition: "all 300ms ease 0ms",
    transform: "translate(-50%,-50%)",
    top: "30%",
    left: "50%",
  },

  "&:hover .overlay-text": {
    top: "50%",
    opacity: 1,
    zIndex: 3,
    width: "70%",
    textAlign: "center",
  },
}));
