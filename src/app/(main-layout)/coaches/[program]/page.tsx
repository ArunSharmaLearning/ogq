import CoachesProgram from "@/components/coaches/coaches";
import callApi from "@/hooks/use-swr";

function fetchProgramSeo(program: string) {
	const { data, error } = callApi(`trainers?cp_type=${program}`);
	if (error) return null;
	return data;
}


export async function generateStaticParams() {

	return [
		{ program: 'cep' },
		{ program: 'clp' },
		{ program: 'cfp' },
	];
}

export async function generateMetadata({ params }: { params: { program: string } }) {
	const seo = await fetchProgramSeo(params.program);

	return {
		title: seo?.seo_meta_title || "Coaches Program - OGQ",
		description: seo?.seo_meta_description || "Explore OGQ's coaching programs.",
		alternates: {
			canonical: seo?.seo_canonical_uri || undefined,
		},
		openGraph: {
			title: seo?.seo_meta_title || "Coaches Program - OGQ",
			description: seo?.seo_meta_description || "Explore OGQ's coaching programs.",
			url: seo?.seo_canonical_uri || `https://yourdomain.com/coaches/${params.program}`,
			type: "website",
			images: [
				{
					url: seo?.seo_og_image || "https://yourdomain.com/og-image.jpg",
				},
			],
		},
	};
}


const Program = ({ params }: { params: { program: string } }) =>
	<CoachesProgram params={params} />;

export default Program;
