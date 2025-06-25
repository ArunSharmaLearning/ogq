import CoachesProgram from "@/components/coaches/coaches";

export async function generateStaticParams() {

	return [
		{ program: 'cep' },
		{ program: 'clp' },
		{ program: 'cfp' },
	];
}

const Program = ({ params }: { params: { program: string } }) =>
	<CoachesProgram params={params} />;

export default Program;
