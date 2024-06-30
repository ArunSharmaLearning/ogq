'use client'

import Banner from "@/components/banner/banner";
import { useRouter } from "@/hooks/use-router";
import { useAPI } from "@/hooks/use-swr";
import { Container, FormControl, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { useState } from "react";


export default function JuniorLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	const [state, setState] = useState({ sport: 'archery' })
	const { data: sportCategory, isLoading } = useAPI('sports_in_navbar')
	const router = useRouter()
	const handleChange = (event: SelectChangeEvent<string>) => {
		const name = event.target.name;
		const value = event.target.value;

		setState(prev => ({ ...prev, [name]: value }));
		router.push(`/junior/${value}`)
	};

	return (
		<>
			<Banner image="/test.jpg" text={state.sport.toLocaleUpperCase()} />
			<Container>
				<Stack direction='row' alignItems={'center'} spacing={3} mb={3}>
					<Typography variant='h4' className="underlineAfter">Choose Sport</Typography>
					<FormControl
						variant="outlined"
						sx={{
							minWidth: 130,
							m: "0rem 1rem 0rem 1rem",
							height: "2.7rem",
						}}
					>
						<Select
							sx={{ height: "100%", textAlign: "left" }}
							value={state.sport}
							className="input-label-select"
							onChange={handleChange}
							displayEmpty
							name="sport"
						>

							{!isLoading && sportCategory.junior.map((category) => (
								<MenuItem key={category} value={category}>
									{category.charAt(0).toUpperCase()}{category.slice(1)}
								</MenuItem>
							))}

						</Select>
					</FormControl>
				</Stack>
				{children}
			</Container>
		</>
	);
}
