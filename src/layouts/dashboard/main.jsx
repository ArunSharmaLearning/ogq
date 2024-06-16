import PropTypes from "prop-types";

import Box from "@mui/material/Box";

import { useResponsive } from "@/hooks/use-responsive";

import { NAV, HEADER } from "./config-layout";

// ----------------------------------------------------------------------

const SPACING = 0;

export default function Main({ children, sx, ...other }) {
  const lgUp = useResponsive("up", "lg");

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: "flex",
        flexDirection: "column",
        pt: `${HEADER.H_MOBILE + SPACING}px`,
        ...(lgUp && {
          py: `${HEADER.H_DESKTOP + SPACING}px`,
          width: "100%",
        }),
        pb: 2,
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
