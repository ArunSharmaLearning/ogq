// @ts-nocheck
"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";

import Main from "../dashboard/main";
import { Container } from "@mui/material";
// import Header from "@/components/header";
import { useRouter } from "@/hooks/use-router";
import Footer from "@/components/footer";
import CoachesHeader from "@/components/header/coaches/coaches-header";

export default function DashboardLayout({ children }) {
	// const [openNav, setOpenNav] = useState(false);


	return (
		<>
			<Container>
				<CoachesHeader />
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
