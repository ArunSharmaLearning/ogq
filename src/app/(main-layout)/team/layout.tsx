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

import { useEffect, useState } from "react";

export default function TeamLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const router = useRouter();

	const [state, setState] = useState({ team: router.pathname().split('/').filter(Boolean).pop()?.replace(/%20|-|_/g, ' ') || '' });
	const nation = router.pathname().split("/")[2];

	let bannerText = "Team OGQ";
	if (nation == "india") {
		bannerText = "Team OGQ, INDIA";
	} else {
		bannerText = "Team OGQ, USA";
	}
	const { data: teamCategory, isLoading } = useAPI("dropdown");
	const handleChange = (event: SelectChangeEvent<string>) => {
		const name = event.target.name;
		const value = event.target.value;
		setState((prev) => ({ ...prev, [name]: value }));
		router.push(
			`${router.pathname().split("/").slice(0, -1).join("/")}/${value}`
		);
	};

	useEffect(() => {
		setState({ team: router.pathname().split('/').filter(Boolean).pop()?.replace(/%20|-|_/g, ' ') || 'board%20of%20directors' })
	}, [router.pathname()])

	return (
		<>
			<Banner
				image="editable/team_ogq.jpg"
				text={bannerText.replace(/%20|-|_/g, " ")}
			/>
			<Container>

				{nation == 'usa' && <Typography className="underlineAfter" variant="h4" mb={3}>Team OGQ, USA</Typography>}
				{nation == 'india' && <Stack direction="row" alignItems={"center"} gap={3} mb={4}>
					<Typography variant="h4" className="underlineAfter">
						Team OGQ
					</Typography>
					<FormControl
						variant="outlined"
						sx={{
							minWidth: 160,
							m: "0rem 1rem 0rem 1rem",
							height: "2.7rem",
						}}
					>
						<Select
							sx={{ height: "100%", textAlign: "left", p: 0, mt: '0' }}
							value={state.team}
							className="input-label-select"
							onChange={handleChange}
							displayEmpty
							name="team"
						>
							{isLoading ? (
								<MenuItem value={state.team}>
									<Typography variant="h6">
										{state.team
											.replace(/%20|-|_/g, " ")
											.split(" ")
											.map((word: string) => {
												const specialWords = ["ogq", "ind", "sng", "sgp"];
												return specialWords.includes(word.toLowerCase())
													? word.toUpperCase()
													: word.charAt(0).toUpperCase() + word.slice(1);
											})
											.join(" ")}
									</Typography>
								</MenuItem>
							) : (
								teamCategory.team_ogq_india_groups.map((category) => (
									<MenuItem key={category} value={category}>
										<Typography variant="h6">
											{category
												.replace(/%20|-|_/g, " ")
												.split(" ")
												.map((word: string) => {
													const specialWords = ["ogq", "ind", "sng", "sgp"];
													return specialWords.includes(word.toLowerCase())
														? word.toUpperCase()
														: word.charAt(0).toUpperCase() + word.slice(1);
												})
												.join(" ")}
										</Typography>
									</MenuItem>
								))
							)}

						</Select>
					</FormControl>
				</Stack>}
				{children}
			</Container>
		</>
	);
}
