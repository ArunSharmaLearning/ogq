import callApi, { useAPI } from "@/hooks/use-swr";
import Banner from "@/components/banner/banner";
import { API_URL } from "@/constants/api";
import { Box, Container, Stack, Typography } from "@mui/material";
import DescriptionCard from "@/components/cards/description";
import DownloadButton from "@/components/button/download";


export async function generateStaticParams() {

	return [
		{ program: 'cep' },
		{ program: 'clp' },
		{ program: 'cfp' },
	];
}

const Program = async ({ params }: { params: { program: string } }) => {
	const program = await callApi(
		`${params.program}`, 2
	);

	const trainers = await callApi(
		`trainers?cp_type=${params.program}`, 2);


	const alumni = await callApi(
		`alumni?cp_type=${params.program}`, 2);

	return (
		<>
			<Banner
				image={`${API_URL}/${program.data.back_image}`}
				text={program.data.caption}
			/>
			<Container>
				<Typography className="underlineAfter" variant="h2">Coaches Program - {params.program.toUpperCase()}</Typography>
				<Typography variant="body1" dangerouslySetInnerHTML={{ __html: program.data.content }} />



				<Box>

					{trainers && trainers.data.length > 0 && <Typography mb={3} className="underlineAfter" variant="h2">Coaches</Typography>}
					{trainers && trainers.data.length > 0 && (
						<Stack
							direction={"row"}
							flexWrap={"wrap"}
							gap={2}
							justifyContent={"flex-start"}
						>
							{trainers.data.map((trainee) => (
								<DescriptionCard key={trainee.id} team={trainee} />
							))}
						</Stack>
					)}

					{alumni.data.length > 0 &&
						<Typography mb={3} className="underlineAfter" variant="h2">Alumni</Typography>
					}

					<Stack direction={'row'} spacing={0} flexWrap={'wrap'}>
						{alumni && alumni.data.map((report: any) => (
							<DownloadButton key={report.name + "_" + report.id} index={report.name + "_" + report.id} text={report.name} file={report.file} />
						))}
					</Stack>
				</Box>
			</Container>


		</>
	)
};

export default Program;
