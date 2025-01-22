'use client'

import Banner from "@/components/banner/banner";
import DownloadButton from "@/components/button/download/download-button";
import callApi, { useAPI } from "@/hooks/use-swr";
import { Box, Container, Stack, Typography } from "@mui/material";



export const AnnualReport = ({ params }: { params: { type: string } }) => {
	let bannerText, reportText, endpoint;
	if (params.type == 'investor-return') {
		bannerText = "Investor Return"
		endpoint = "annual_return"
		reportText = "return"
	}
	else {
		bannerText = "Performance Report"
		endpoint = "annual_report"
		reportText = "performance"
	}

	const { data: reports, isLoading } = useAPI(endpoint);

	return (
		<Box>
			<Banner image="editable/annual_report.jpg" text={bannerText} />

			<Container>
				<Typography variant="h6">Excellence in</Typography>
				<Typography variant="h4" mt={0} className="underlineAfter"> Athlete Development</Typography>

				<Typography sx={{ mb: 2 }} variant="body1">
					Please click on the link to download the annual {reportText} report.
					The report gives detailed information of the work done by OGQ in the
					respective financial year. It also gives they key achievements of the
					athletes supported by OGQ.
				</Typography>

				<Stack direction={'row'} spacing={0} flexWrap={'wrap'}>
					{reports?.map((report: any) => (
						<DownloadButton key={report.name + "_" + report.id} index={report.name + "_" + report.id} text={report.name} file={report.file} />
					))}
				</Stack>
			</Container>
		</Box>
	);
};

