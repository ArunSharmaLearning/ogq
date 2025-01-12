'use client'

import ProfileCard from "@/components/cards/profile/profile-card";
import NoResults from "@/components/loader/no-results";
import { useAPI } from "@/hooks/use-swr";
import { Stack, Typography } from "@mui/material";
import Loading from "@/components/loader";


export const SportComponent = ({ params, category }: { params: { sports: string }, category: string }) => {
	const { data: profiles, isLoading } = useAPI(
		`junior?sport=${params.sports}`
	);
	return (
		<>
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
