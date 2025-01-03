import PropTypes from "prop-types";
import { forwardRef } from "react";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import { default as NextLink } from "next/link";
import Image from "next/image";

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme();

  const height = theme.breakpoints.down("sm") ? 45 : 60;
  const width = theme.breakpoints.down("sm") ? 30 : 40;

  const logo = (
    <Image priority src="/ogq-logo.svg" alt="ogq" width={width} height={height} />
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Box sx={sx}>
      <NextLink href="/">
        {logo}
      </NextLink>
    </Box>
  );
});

Logo.displayName = "Logo";

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
