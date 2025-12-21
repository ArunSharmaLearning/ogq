import CoachesProgram from "@/components/coaches/coaches";
import callApi from "@/hooks/use-swr";

export async function generateStaticParams() {

	return [
		{ program: 'cep' },
		{ program: 'clp' },
		{ program: 'cfp' },
	];
}

export async function generateMetadata({ params }: { params: { program: string } }) {
	const { data: seo } = await callApi(`trainers?cp_type=${params.program}`);

	return {
		title: `Coaches Program - ${params.program.toUpperCase()} | OGQ`,
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



const Program = ({ params }: { params: { program: string } }) =>
	<CoachesProgram params={params} />;

export default Program;
