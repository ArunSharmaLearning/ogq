"use client";
import ProfileCard from "@/components/cards/profile/profile-card";
import NoResults from "@/components/loader/no-results";
import callApi, { useAPI } from "@/hooks/use-swr";
import { FormControl, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import Loading from "@/components/loader";
import { useState } from "react";
import { useRouter } from "@/hooks/use-router";


export const ResultComponent = ({ params }: { params: { sport: string, year: string } }) => {


	let resultApi = "olympics_result";

	if (params.sport == "paralympic-result") {
		resultApi = "paralympics_result";
	}


	const { data: profiles, isLoading } = useAPI(
		`${resultApi}?year=${params.year}`
	);

	return (
		<>
			{
				isLoading ? (
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
				)

			}
		</>

	)
}