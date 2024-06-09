import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

import { useResponsive } from "@/hooks/use-responsive";

import { bgBlur } from "@/theme/css";

import Iconify from "@/components/iconify";

import Searchbar from "./common/searchbar";
import { NAV, HEADER } from "./config-layout";
import AccountPopover from "./common/account-popover";
import LanguagePopover from "./common/language-popover";
import Logo from "@/components/logo";
import NavItems from "@/components/nav-item/nav-item";
import navConfig from "./config-navigation";
import { Container } from "@mui/material";

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const theme = useTheme();

  const lgUp = useResponsive("up", "lg");

  const renderContent = (
    <Stack flexDirection={"row"}>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Logo />

      <Box sx={{ flexGrow: 1 }} />

      <Stack
        direction="row"
        alignItems="end"
        flexDirection={"center"}
        spacing={1}
      >
        <NavItems items={navConfig} />

        {/* <LanguagePopover />
        <AccountPopover /> */}
      </Stack>
    </Stack>
  );

  return (
    <>
      <AppBar
        sx={{
          boxShadow: "none",
          height: HEADER.H_MOBILE,
          zIndex: theme.zIndex.appBar + 1,
          ...bgBlur({
            color: theme.palette.background.default,
          }),
          transition: theme.transitions.create(["height"], {
            duration: theme.transitions.duration.shorter,
          }),
          ...(lgUp && {
            height: HEADER.H_DESKTOP,
          }),
        }}
      >
        <Toolbar
          sx={{
            height: 1,
            px: { lg: 5 },
          }}
        >
          <Container>{renderContent}</Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
