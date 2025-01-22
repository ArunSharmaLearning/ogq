import { AnnualReport } from "@/components/report-client";

export async function generateStaticParams() {
	return [
		{ type: 'performance' },
		{ type: 'investor-return' },
	];
}

const Report = ({ params }: { params: { type: string } }) => {
	return (
		<AnnualReport params={params} />
	);
};

export default Report;
