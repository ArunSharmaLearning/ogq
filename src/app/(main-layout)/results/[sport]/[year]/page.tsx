"use client";
import ProfileCard from "@/components/cards/profile/profile-card";
import NoResults from "@/components/loader/no-results";
import { useAPI } from "@/hooks/use-swr";
import { FormControl, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import Loading from "@/components/loader";
import { useState } from "react";
import { useRouter } from "@/hooks/use-router";

const SportResult = ({ params }: { params: { sport: string, year: string } }) => {

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

	const { data: sportCategory, isLoading: isLoadingSportCat } = useAPI("dropdown");

	let resultApi = "olympics_result";

	if (params.sport == "paralympic-result") {
		resultApi = "paralympics_result";
	}

	const handleChange = (event: SelectChangeEvent<string>) => {
		const name = event.target.name;
		const value = event.target.value;

		setState((prev) => ({ ...prev, [name]: value }));
		router.push(`/results/${params.sport}/${value}`);
	};




	const { data: profiles, isLoading } = useAPI(
		`${resultApi}?year=${params.year}`
	);

	return (
		<>
			<Stack direction="row" alignItems={"center"} spacing={3} mb={3}>
				<Typography variant="h4" className="underlineAfter">
					Choose Event
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
						{!isLoadingSportCat ? (
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

			{isLoading ? (
				<Loading />
			) : profiles && profiles.length > 0 ? (
				<Stack direction={"row"} flexWrap={"wrap"} gap={2}>
					{profiles.map((profile) => (
						<ProfileCard
							key={profile.id}
							image={profile.image}
							name={profile.name}
							title={profile.event}
						/>
					))}
				</Stack>
			) : (
				<NoResults />
			)}
		</>
	);
};

export default SportResult;
