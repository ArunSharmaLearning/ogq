'use client'

import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

import Box from "@mui/material/Box";

const Iconify = ({ icon, width = 20, ml = 0.5, sx = {}, ...other }) => (
  <Box
    component={Icon}
    className="component-iconify"
    icon={icon}
    sx={{ width, height: width, ml: ml, ...sx }}
    {...other}
  />
);

Iconify.displayName = "Iconify";

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  width: PropTypes.number,
};

export default Iconify;
