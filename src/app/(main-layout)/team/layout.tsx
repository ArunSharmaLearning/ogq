'use client'

import Banner from "@/components/banner/banner";
import { useRouter } from "@/hooks/use-router";
import { useAPI } from "@/hooks/use-swr";
import { Container, FormControl, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
// import { useRouter } from "next/router";
import { useState } from "react";


export default function TeamLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const router = useRouter()

	const [state, setState] = useState({ sport: 'all' })
	const nation = router.pathname().split('/')[2];
	let bannerText = "Team OGQ";
	if (nation == 'india') {
		bannerText = "Team OGQ, INDIA"
	}
	else {
		bannerText = "Team OGQ, USA"

	}
	const { data: teamCategory, isLoading } = useAPI('dropdown')
	const handleChange = (event: SelectChangeEvent<string>) => {
		const name = event.target.name;
		const value = event.target.value;
		setState(prev => ({ ...prev, [name]: value }));
		router.push(`${router.pathname().split('/').slice(0, -1).join('/')}/${value}`)
	};

	return (
		<>
			<Banner image="/test.jpg" text={bannerText.toUpperCase().replace(/%20|-|_/g, ' ')} />
			<Container>
				<Typography variant="h6">
					Meet Our Team
				</Typography>
				<Stack direction='row' alignItems={'center'} gap={3} mb={3}>

					<Typography variant='h4' className="underlineAfter" mt={0} mb={2}>Choose Team</Typography>
					<FormControl
						variant="outlined"
						sx={{
							minWidth: 160,
							m: "0rem 1rem 0rem 1rem",
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
							<MenuItem value={'all'}>
								<Typography variant="h6">
									All
								</Typography>
							</MenuItem>
							{!isLoading && teamCategory.team_ogq_india_groups.map((category) => (
								<MenuItem key={category} value={category}>
									<Typography variant="h6">
										{category.charAt(0).toUpperCase()}{category.slice(1).replace(/%20|-|_/g, ' ')}
									</Typography>
								</MenuItem>
							))
							}

						</Select>
					</FormControl>
				</Stack>
				{children}
			</Container >
		</>
	);
}
