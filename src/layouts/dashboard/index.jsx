"use client";
import React, { useState } from "react";

import Box from "@mui/material/Box";

import Main from "./main";
import { Container } from "@mui/material";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function DashboardLayout({ children }) {

  return (
    <>
      <Container>
        <Header />
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
  )
}

DashboardLayout.propTypes = {
  children: React.ReactNode,
};
