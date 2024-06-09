import { default as RouterLink } from "next/link";

import { ListItem as MuiListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Link = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 500,
  fontSize: "0.8125rem",
  lineHeight: "1.6",
  whiteSpace: "nowrap",
  margin: 0,
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.8rem",
    padding: theme.spacing(0, 1),
  },
  "&.active": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.light,
  },

  "&:hover": {
    color: theme.palette.primary.dark,
    textDecoration: "underline",
  },
}));

export const ListItem = styled(MuiListItem)(({ theme }) => ({
  color: theme.palette.common.white,
  padding: 0,
}));
