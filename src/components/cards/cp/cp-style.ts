import React from "react";
import { Box, BoxProps, ThemedProps, styled } from "@mui/material";
// create a simple box with border-radius, display flex, align-items center, justify-content center, and a background image
export const OverlayBox = styled(Box)<BoxProps>(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${theme.palette.background.default})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));
