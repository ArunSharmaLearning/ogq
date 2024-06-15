"use client";


import React, { useState } from "react";

import { NAV, HEADER } from "@/layouts/dashboard/config-layout";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import * as Styles from "@/components/common/header.styles.js";
import Iconify from "@/components/iconify/index.js";
import Logo from "@/components/logo/index.js";
import { bgBlur } from "@/theme/css";
import { useResponsive } from "@/hooks/use-responsive";
import { usePathname } from "next/navigation";
import { CommonButton } from "@/components/button";

type AccordionState = {
  [key: string]: boolean;
};

const Header = () => {
  const [states, setStates] = useState([
    {
      title: "OGQ",
      href: "/",
      childrens: [
        {
          title: "OGQ Usa",
          href: "/ogq-usa",
        },
        {
          title: "Coaches Program",
          href: "/programs/coaches",
        },
      ],
    },
    {
      title: "About OGQ",
      href: "/about-us",
      childrens: [
        {
          title: "Vision and Mission",
          href: "/vision-and-mission",
        },
        {
          title: "History",
          href: "/history",
        },
        {
          title: "Team OGQ",
          href: "/team",
        },
        {
          title: "OGQ in Media",
          href: "/media",
        },
      ],
    },
    {
      title: "What We Do",
      href: "",
      childrens: [
        {
          title: "Area of Support",
          href: "/areas-of-support",
        },
        {
          title: "OGQ Impact",
          href: "/ogq-impact",
        },
        {
          title: "Selection Process",
          href: "/selection-process",
        },
        {
          title: "Annual Performance Report",
          href: "/report/performance",
        },
      ],
    },
    {
      title: 'Olympics',
      href: '/olympics/archery'
    },
    {
      title: 'Paralympics',
      href: '/paralympics/archery',
    }
  ]);
  const pathname = usePathname();
  const theme = useTheme();
  const isActive = (paths: string[]): boolean => {
    return paths.some((origPath) => pathname === "/" + origPath);
  }

  const lgUp = useResponsive("up", "md");

  const [searched, setSearched] = useState();
  const isMobile = !lgUp;

  const [sideNav, setSideNav] = React.useState(false);

  const drawerWidth = 250;

  const [accordianExpand, setAccordianExpand] = useState<AccordionState>({});

  const handleDrawerToggle = () => {
    setAccordianExpand({});
    setSideNav((prevState) => !prevState);
  };

  const handleAccordian = (key: string) => {
    setAccordianExpand({})
    setAccordianExpand((prev) => ({
      ...prev,
      [key]: prev[key] ? !prev[key] : true,
    }));
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
        <Iconify ml={0} icon={"material-symbols:close"} />
      </IconButton>
      <List sx={{ width: "100%", p: 0 }}>
        {states.map((state, index) => (
          <Styles.ListItem key={index}>
            {state.childrens ? (
              <Accordion
                expanded={!!accordianExpand[state.title]}
                sx={{
                  width: "100%",
                  "& .MuiButtonBase-root": {
                    minHeight: "fit-content !important",
                  },
                }}
              >
                <AccordionSummary
                  sx={{
                    p: 0,
                    m: 0,
                    margin: 0,
                    "& .MuiAccordionSummary-content": { m: "0 !important" },
                  }}
                >
                  <Styles.Link
                    sx={{ justifyContent: "space-between" }}
                    aria-disabled
                    href={{}}
                    onClick={() => handleAccordian(state.title)}
                    className={`parent-link ${isActive(
                      [...state.childrens.map((child) => child.href.substring(1)),
                      state.href.substring(1)]
                    ) && "active"
                      }`}
                  >
                    {state.title} <Iconify icon={"gridicons:dropdown"} />
                  </Styles.Link>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingY: 0.5, paddingX: 1 }}>
                  <Box>
                    {state.href &&
                      <Styles.Link
                        key={0}
                        href={state.href}
                        sx={{ p: theme.spacing(0.5, 1) }}
                        onClick={handleDrawerToggle}
                      >
                        {state.title} Home
                      </Styles.Link>
                    }

                    {state.childrens.map((children, index) => (
                      <Styles.Link
                        key={index + 1}
                        href={children.href}
                        sx={{ p: theme.spacing(0.5, 1) }}
                        onClick={handleDrawerToggle}
                      >
                        {children.title}
                      </Styles.Link>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>) :
              (
                <Styles.ListItem>
                  <Styles.Link onClick={handleDrawerToggle} className={`parent-link ${isActive(
                    [state.href.substring(1)]
                  ) && "active"
                    }`}
                    href={state.href}>
                    {state.title}
                  </Styles.Link>
                </Styles.ListItem>
              )}
          </Styles.ListItem>))}



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
          backgroundColor: alpha(theme.palette.common.white, 0.9),
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
              // @ts-nocheck
              // sx={(theme) => ({
              //   minWidth: "45px",
              //   [theme.breakpoints.up("sm")]: { mr: "1.5rem" },
              // })}
              />

              <List
                sx={{
                  display: { xs: "none", md: "flex" },
                  height: "100%",
                  padding: 0,
                }}
              >
                <Styles.ListItem>
                  <Styles.Link
                    href="/"
                    className={`parent-link ${isActive([""]) && "active"}`}
                  >
                    Home <Iconify icon={"gridicons:dropdown"} />
                  </Styles.Link>
                  <Styles.DropdownContent>
                    <Styles.Link href="/about-us">OGQ Usa</Styles.Link>
                    <Styles.Link href="/programs/coaches">
                      Coaches Program
                    </Styles.Link>
                  </Styles.DropdownContent>
                </Styles.ListItem>

                <Styles.ListItem>
                  <Styles.Link
                    href="/about-us"
                    className={`parent-link ${isActive([
                      "about-us",
                      "history",
                      "team",
                      "media",
                      "careers",
                      "contact-us",
                      "vision-and-mission",
                    ]) && "active"
                      }`}
                  >
                    About OGQ <Iconify icon={"gridicons:dropdown"} />
                  </Styles.Link>
                  <Styles.DropdownContent>
                    <Styles.Link href="/vision-and-mission">
                      Vision and Mission
                    </Styles.Link>
                    <Styles.Link href="/history">History</Styles.Link>
                    <Styles.Link href="/team">Team OGQ</Styles.Link>
                    <Styles.Link href="/media">OGQ in Media</Styles.Link>
                    <Styles.Link href="/careers">Careers</Styles.Link>
                    <Styles.Link href="/contact-us">Contact Us</Styles.Link>
                  </Styles.DropdownContent>
                </Styles.ListItem>

                <Styles.ListItem>
                  <Styles.Link className="parent-link" href="/about-us">
                    What We Do <Iconify icon={"gridicons:dropdown"} />
                  </Styles.Link>
                  <Styles.DropdownContent>
                    <Styles.Link href="/areas-of-support">
                      Area of Support
                    </Styles.Link>
                    <Styles.Link href="/ogq-impact">OGQ Impact</Styles.Link>
                    <Styles.Link href="/selection-process">
                      Selection Process
                    </Styles.Link>
                    <Styles.Link href="/report/performance">
                      Annual Performance Report
                    </Styles.Link>
                    <Styles.Link href="/report/investor-return">
                      Investors/Annual Return
                    </Styles.Link>
                    <Styles.Link href="/csr-policy">CSR Policy</Styles.Link>
                  </Styles.DropdownContent>
                </Styles.ListItem>

                <Styles.ListItem>
                  <Styles.Link className="parent-link" href="/olympics/archery">
                    Olympics
                  </Styles.Link>
                </Styles.ListItem>

                <Styles.ListItem>
                  <Styles.Link
                    className="parent-link"
                    href="/paralympics/archery"
                  >
                    Paralympics
                  </Styles.Link>
                </Styles.ListItem>

                <Styles.ListItem>
                  <Styles.Link className="parent-link" href="/about-us">
                    Olympic Results
                    <Iconify icon={"gridicons:dropdown"} />
                  </Styles.Link>
                  <Styles.DropdownContent>
                    <Styles.Link href="/about-us">Rio 2016</Styles.Link>
                    <Styles.Link href="/executives">London 2012</Styles.Link>
                  </Styles.DropdownContent>
                </Styles.ListItem>

                <Styles.ListItem>
                  <Styles.Link className="parent-link" href="/donate-now">
                    Donate Now <Iconify icon={"gridicons:dropdown"} />
                  </Styles.Link>
                  <Styles.DropdownContent>
                    <Styles.Link href="/donate-now">Contribute</Styles.Link>
                    <Styles.Link href="/corporate">
                      CSR for Corporate
                    </Styles.Link>
                    <Styles.Link href="/testimonials">Testimonials</Styles.Link>
                  </Styles.DropdownContent>
                </Styles.ListItem>
              </List>
            </Box>

            {/* <Box
              sx={{
                display: "flex",
                gap: "5px",
                flexWrap: "wrap",
                m: "10px 0",
              }}
            >
              <CommonButton>Login</CommonButton>
            </Box> */}

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
