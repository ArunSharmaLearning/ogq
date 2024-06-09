"use client";
import React, { useState } from "react";

import { NAV, HEADER } from "@/layouts/dashboard/config-layout";

import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  List,
  Toolbar,
  Typography,
  alpha,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";

import "./header.scss";
import Searchbar from "@/layouts/dashboard/common/searchbar";
import * as Styles from "./header.styles.js";
import "./header.styles.js";
import Iconify from "../iconify";
import Logo from "../logo";
import { bgBlur } from "@/theme/css";
import { useResponsive } from "@/hooks/use-responsive";
import { useRouter } from "@/hooks/use-router";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const theme = useTheme();

  const lgUp = useResponsive("up", "md");

  const [searched, setSearched] = useState();
  const isMobile = !lgUp;

  const [sideNav, setSideNav] = React.useState(false);

  const drawerWidth = 250;
  const handleDrawerToggle = () => {
    setSideNav((prevState) => !prevState);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searched) navigate(`search/?query=${searched}`);
  };

  const drawer = (
    <Toolbar sx={{ display: "flex", flexDirection: "column" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        sx={{ ml: "auto" }}
        onClick={handleDrawerToggle}
      >
        <Iconify icon={"material-symbols:close"} />
      </IconButton>
      <List sx={{ width: "100%", p: 0 }}>
        <Styles.ListItem>
          <Styles.Link
            onClick={handleDrawerToggle}
            className={pathname == "/" && "active"}
            href="/"
          >
            Home
          </Styles.Link>
        </Styles.ListItem>
        <Styles.ListItem>
          <Styles.Link onClick={handleDrawerToggle} href="/news">
            News
          </Styles.Link>
        </Styles.ListItem>
        <Styles.ListItem>
          <Styles.Link onClick={handleDrawerToggle} href="/event">
            Event
          </Styles.Link>
        </Styles.ListItem>
        <Styles.ListItem className="dropdown">
          <Box>
            <Typography variant="span">
              About <Iconify sx={{ ml: 1 }} icon={"gridicons:dropdown"} />
            </Typography>
            <Box className="dropdown-content">
              <Styles.Link onClick={handleDrawerToggle} href="/about-us">
                The ACBS
              </Styles.Link>
              <Styles.Link onClick={handleDrawerToggle} href="/executives">
                Executives
              </Styles.Link>
              <Styles.Link onClick={handleDrawerToggle} href="/members">
                Members
              </Styles.Link>
              <Styles.Link onClick={handleDrawerToggle} href="/past-champions">
                Past Champions
              </Styles.Link>
              <Styles.Link onClick={handleDrawerToggle} href="/rules">
                Rules
              </Styles.Link>
            </Box>
          </Box>
        </Styles.ListItem>
        <Styles.ListItem>
          <Styles.Link onClick={handleDrawerToggle} href="/documents">
            Documents
          </Styles.Link>
        </Styles.ListItem>
        <Styles.ListItem className="dropdown">
          <Box>
            <Typography variant="span">
              Gallery&apos;s <Iconify icon={"gridicons:dropdown"} />
            </Typography>
            <Box className="dropdown-content">
              <Styles.Anchor
                target="_blank"
                href="https://www.facebook.com/acbsport/photos_albums"
              >
                Photographs
              </Styles.Anchor>
              <Styles.Anchor
                href="https://www.youtube.com/@acbstv/videos"
                target="_blank"
              >
                Videos
              </Styles.Anchor>
            </Box>
          </Box>
        </Styles.ListItem>
        <Styles.ListItem>
          <Styles.Link onClick={handleDrawerToggle} href="/contact-us">
            Contact Us
          </Styles.Link>
        </Styles.ListItem>
        <Styles.ListItem>
          <Styles.Login
            href="https://acbsbackend.pythonanywhere.com/admin/login/?next=/admin/"
            target="_blank"
          >
            Login
          </Styles.Login>
        </Styles.ListItem>
      </List>
    </Toolbar>
  );

  return (
    <>
      <AppBar
        sx={{
          boxShadow: "none",
          borderBottom: `1px solid ${theme.palette.primary.dark}`,
          height: HEADER.H_MOBILE,
          zIndex: theme.zIndex.appBar + 1,
          ...bgBlur({
            color: theme.palette.background.default,
            blur: 8,
          }),
          transition: theme.transitions.create(["height"], {
            duration: theme.transitions.duration.shorter,
          }),
          ...(lgUp && {
            height: HEADER.H_DESKTOP,
          }),
          backgroundColor: alpha(theme.palette.common.white, 0.9)
        }}
      >
        <Container sx={{ height: "100%" }}>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              height: "100%",
              minHeight: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Logo
                sx={(theme) => ({
                  minWidth: '45px',
                  [theme.breakpoints.up("sm")]: { mr: "1.5rem" },
                })}
              />

              <List
                sx={{
                  display: { xs: "none", md: "flex" },
                  height: "100%",
                  padding: 0,
                }}
              >
                <Styles.ListItem className="dropdown">
                  <Styles.Link className="parent-link" href="/">
                    Home <Iconify icon={"gridicons:dropdown"} />
                  </Styles.Link>
                  <Box className="dropdown-content">
                    <Styles.Link href="/about-us">OGQ Usa</Styles.Link>
                    <Styles.Link href="/executives">Coaches Program</Styles.Link>
                  </Box>
                </Styles.ListItem>

                <Styles.ListItem className="dropdown">
                  <Styles.Link className="parent-link" href="/about-us">
                    About OGQ <Iconify icon={"gridicons:dropdown"} />
                  </Styles.Link>
                  <Box className="dropdown-content">
                    <Styles.Link href="/vision-and-mission">Vision and Mission</Styles.Link>
                    <Styles.Link href="/history">History</Styles.Link>
                    <Styles.Link href="/team">Team OGQ</Styles.Link>
                    <Styles.Link href="/media">
                      OGQ in Media
                    </Styles.Link>
                    <Styles.Link href="/careers">Careers</Styles.Link>
                    <Styles.Link href="/contact-us">Contact Us</Styles.Link>
                  </Box>
                </Styles.ListItem>

                <Styles.ListItem className="dropdown">
                  <Styles.Link className="parent-link" href="/about-us">
                    What We Do <Iconify icon={"gridicons:dropdown"} />
                  </Styles.Link>
                  <Box className="dropdown-content">
                    <Styles.Link href="/areas-of-support">Area of Support</Styles.Link>
                    <Styles.Link href="/ogq-impact">OGQ Impact</Styles.Link>
                    <Styles.Link href="/selection-process">Selection Process</Styles.Link>
                    <Styles.Link href="/report/performance">
                      Annual Performance Report
                    </Styles.Link>
                    <Styles.Link href="/report/investor-return">Investors/Annual Return</Styles.Link>
                    <Styles.Link href="/csr-policy">CSR Policy</Styles.Link>
                  </Box>
                </Styles.ListItem>

                <Styles.ListItem className="dropdown">
                  <Styles.Link className="parent-link" href="/olympics/archery">
                    Olympics
                  </Styles.Link>
                </Styles.ListItem>

                <Styles.ListItem className="dropdown">
                  <Styles.Link className="parent-link" href="/paralympics/archery">
                    Paralympics
                  </Styles.Link>
                </Styles.ListItem>

                <Styles.ListItem className="dropdown">
                  <Styles.Link className="parent-link" href="/about-us">
                    Olympic Results<Iconify icon={"gridicons:dropdown"} />
                  </Styles.Link>
                  <Box className="dropdown-content">
                    <Styles.Link href="/about-us">Rio 2016</Styles.Link>
                    <Styles.Link href="/executives">London 2012</Styles.Link>
                  </Box>
                </Styles.ListItem>

                <Styles.ListItem className="dropdown">
                  <Styles.Link className="parent-link" href="/about-us">
                    Donate Now <Iconify icon={"gridicons:dropdown"} />
                  </Styles.Link>
                  <Box className="dropdown-content">
                    <Styles.Link href="/about-us">Contribute</Styles.Link>
                    <Styles.Link href="/corporate">CSR for Corporate</Styles.Link>
                    <Styles.Link href="/testimonials">Testimonials</Styles.Link>
                    <Styles.Link href="/past-champions">
                      Past Champions
                    </Styles.Link>
                  </Box>
                </Styles.ListItem>
              </List>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "5px",
                flexWrap: "wrap",
                m: "10px 0",
              }}
            >
              <form onSubmit={handleSearch}>
                <Searchbar />
              </form>
              {/* <Styles.Login
                href="https://acbsbackend.pythonanywhere.com/admin/login/?next=/admin/"
                target="_blank"
                sx={{
                  marginLeft: "0.8rem",
                  display: { xs: "none", md: "block" },
                }}
              >
                Login
              </Styles.Login> */}
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ color: "text.disabled", display: { md: "none" } }}
              onClick={handleDrawerToggle}
            >
              <Iconify ml={0} icon={"fe:bar"} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={isMobile ? sideNav : false}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
