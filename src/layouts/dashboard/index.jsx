"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";

import Nav from "./nav";
import Main from "./main";
import { Container } from "@mui/material";
import Header from "@/components/header";
import { useRouter } from "@/hooks/use-router";
import Footer from "@/components/footer";

export default function DashboardLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);
  const { pathname } = useRouter();
  const isLoginPage = pathname === "/login";

  return !isLoginPage ? (
    <>
      <Container>
        <Header onOpenNav={() => setOpenNav(true)} />
      </Container>
      <Box
        sx={{
          minHeight: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Main>{children}</Main>
      </Box>

      <Footer />
    </>
  ) : (
    <>{children}</>
  );
}

DashboardLayout.propTypes = {
  children: React.ReactNode,
};
