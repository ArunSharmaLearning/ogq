import Banner from "@/components/banner/banner"
import GeneralCard from "@/components/cards/general"
import ProfileCard from "@/components/cards/profile/profile-card"
import callApi from "@/hooks/use-swr"
import { Container, Stack, Typography } from "@mui/material"


const OGQImpact = async () => {

	const profiles = await callApi('/ogq_impact');

	return (
		<>
			<Banner image="test.jpg" text="OGQ Impact" />

			<Container>
				<Typography variant="h4" mb={4} className="underlineAfter">
					How OGQ made a difference
				</Typography>
				<Stack direction={'row'} flexWrap={'wrap'} columnGap={3} rowGap={1}>
					{profiles.map((profile: any) =>
						<>
							<ProfileCard key={profile.id} name={profile.name} title={profile.caption} image={profile.image} />
							<ProfileCard key={profile.id} name={profile.name} title={profile.caption} image={profile.image} />
						</>
					)}
				</Stack>

			</Container>

		</>
	)
}

export default OGQImpact