
import { TeamComponent } from "@/components/team/team";
import callApi from "@/hooks/use-swr";


export async function generateStaticParams() {
	const sports = await callApi('dropdown');

	const params = [
		{ slug: ['usa'] },
	];

	sports.data.team_ogq_india_groups.map((team: string) => {
		params.push({ slug: ['india', team.replaceAll(' ', '%20')] })
		params.push({ slug: ['india', team] })
	})

	return params;
}


export async function generateMetadata({ params }: { params: { slug: string[] } }) {
	const nation = params.slug[0];
	const team = params.slug[1];

	let endpoint = "";
	if (nation == "usa") {
		endpoint = `team_ogq_us`
	} else {
		endpoint = `team_ogq_india?group=${team}`;
	}

	const { data: seo } = await callApi(endpoint);
	const title = `Team ${nation.toUpperCase()}${team ? ` – ${decodeURIComponent(team).replace(/[-_]/g, " ")}` : ""
		} | OGQ`;

	return {
		title: title,
		...(seo?.seo_meta_description && {
			description: seo.seo_meta_description,
		}),

		...(seo?.seo_canonical_uri && {
			alternates: {
				canonical: seo.seo_canonical_uri,
			},
		}),

		openGraph: {
			...(seo?.seo_meta_title && {
				title: seo.seo_meta_title,
			}),

			...(seo?.seo_meta_description && {
				description: seo.seo_meta_description,
			}),

			...(seo?.seo_canonical_uri && {
				url: seo.seo_canonical_uri,
			}),

			type: "website",

			...(seo?.seo_og_image && {
				images: [{ url: seo.seo_og_image }],
			}),
		},
	};
}



const Team = ({ params }: { params: { slug: string[] } }) => {
	return (
		<>
			<TeamComponent params={params} />
		</>
	);
};

export default Team;
