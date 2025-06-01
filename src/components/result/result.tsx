"use client";
import ProfileCard from "@/components/cards/profile/profile-card";
import NoResults from "@/components/loader/no-results";
import { useAPI } from "@/hooks/use-swr";
import { Stack } from "@mui/material";
import Loading from "@/components/loader";


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
								title={profile.caption}
								description={profile.description}
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