'use client';

import { useAPI } from "@/hooks/use-swr";
import Banner from "@/components/banner/banner";
import { API_URL } from "@/constants/api";
import { Box, Container, Stack, Typography } from "@mui/material";
import DescriptionCard from "@/components/cards/description";
import DownloadButton from "@/components/button/download";
import Loading from "../loader";

const CoachesProgram = ({ params }: { params: { program: string } }) => {
	const { data: program, isLoading } = useAPI(`${params.program}`, 2);
	const { data: trainers, isLoading: isLoading1 } = useAPI(`trainers?cp_type=${params.program}`, 2);
	const { data: alumni, isLoading: isLoading2 } = useAPI(`alumni?cp_type=${params.program}`, 2);

	if (isLoading || isLoading1 || isLoading2) return <Loading />;

	return (
		<>
			<Banner
				height={{ sm: "28rem", xs: "16rem" }}
				sx={{ backgroundAttachment: "contain" }}
				image={`${API_URL}/${program?.back_image}`}
				text={""}
			/>
			<Container>
				{program?.content && (
					<>
						<Typography className="underlineAfter" variant="h2">
							Coaches Program - {params.program.toUpperCase()}
						</Typography>
						<Typography
							variant="body1"
							dangerouslySetInnerHTML={{ __html: program.content }}
						/>
					</>
				)}

				<Box>
					{trainers?.length > 0 && (
						<>
							<Typography mb={3} className="underlineAfter" variant="h2">
								Trainers
							</Typography>
							<Stack
								direction="row"
								flexWrap="wrap"
								gap={2}
								justifyContent="flex-start"
							>
								{trainers.map((trainee: any) => (
									<DescriptionCard key={trainee.id} team={trainee} />
								))}
							</Stack>
						</>
					)}

					{alumni?.length > 0 && (
						<>
							<Typography mb={3} className="underlineAfter" variant="h2">
								Alumni
							</Typography>
							<Stack direction="row" spacing={0} flexWrap="wrap">
								{alumni.map((report: any) => (
									<DownloadButton
										key={`${report.name}_${report.id}`}
										index={`${report.name}_${report.id}`}
										text={report.name}
										file={report.file}
									/>
								))}
							</Stack>
						</>
					)}
				</Box>
			</Container>
		</>
	);
};

export default CoachesProgram;
