"use client";

import Banner from "@/components/banner/banner";
import { useRouter } from "@/hooks/use-router";
import { useAPI } from "@/hooks/use-swr";
import {
	Container,
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
	Stack,
	Typography,
} from "@mui/material";
import { useState } from "react";

export default function OlympicResultLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const router = useRouter();
	const [state, setState] = useState({
		sport:
			router
				.pathname()
				.split("/")
				.filter(Boolean)
				.pop()
				?.replace(/%20|-/g, " ") || "",
	});

	return (
		<>
			<Banner
				image="editable/olympics_result.jpg"
				text={state.sport.toUpperCase().replace(/%20|-|_/g, " ")}
			/>
			<Container>
				
				{children}
			</Container>
		</>
	);
}
