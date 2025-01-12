// "use client";
import ProfileCard from "@/components/cards/profile/profile-card";
import NoResults from "@/components/loader/no-results";
import callApi from "@/hooks/use-swr";
import { Stack, Typography } from "@mui/material";
import Loading from "@/components/loader";
import { SportComponent } from "@/components/sports";

export async function generateStaticParams() {
	const sports = await callApi('sports_in_navbar');

	return sports.data.junior.map((sport) => ({
	  sports: sport, // Adjust based on your API response
	}));

}

const JuniorSport = ({ params }: { params: { sports: string } }) => {
	return (
		<>
			<SportComponent params={params} category="junior" />
		</>
	);
};

export default JuniorSport;
