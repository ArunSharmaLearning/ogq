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
	const { data: sportCategory, isLoading } = useAPI("dropdown");

	const handleChange = (event: SelectChangeEvent<string>) => {
		const name = event.target.name;
		const value = event.target.value;

		setState((prev) => ({ ...prev, [name]: value }));
		router.push(`/olympic-result/${value}`);
	};

	return (
		<>
			<Banner
				image="/test.jpg"
				text={state.sport.toUpperCase().replace(/%20|-|_/g, " ")}
			/>
			<Container>
				<Stack direction="row" alignItems={"center"} spacing={3} mb={3}>
					<Typography variant="h4" className="underlineAfter">
						Choose Olympic Event
					</Typography>
					<FormControl
						variant="outlined"
						sx={{
							minWidth: 130,
							m: "0rem 1rem",
							height: "2.7rem",
						}}
					>
						<Select
							sx={{ height: "100%", textAlign: "left", p: 0 }}
							value={state.sport}
							className="input-label-select"
							onChange={handleChange}
							displayEmpty
							name="sport"
						>
							{!isLoading ? (
								sportCategory.olympic_result.map((category) => (
									<MenuItem key={category} value={category}>
										<Typography variant="h6">
											{category.charAt(0).toUpperCase()}
											{category.slice(1).replace(/%20|-|_/g, " ")}
										</Typography>
									</MenuItem>
								))
							) : (
								<MenuItem value={state.sport}>
									<Typography variant="h6">
										{state.sport.charAt(0).toUpperCase()}
										{state.sport.slice(1).replace(/%20|-|_/g, " ")}
									</Typography>
								</MenuItem>
							)}
						</Select>
					</FormControl>
				</Stack>
				{children}
			</Container>
		</>
	);
}
