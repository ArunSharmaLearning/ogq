import Banner from "@/components/banner/banner";
import DownloadButton from "@/components/button/download/download-button";
import callApi from "@/hooks/use-swr";
import { Box, Container, Stack, Typography } from "@mui/material";

const AnnualReport = async ({ params }: { params: { type: string } }) => {

	let bannerText, coverImage, endpoint;
	if (params.type == 'investor-return') {
		bannerText = "Invetor Return"
		endpoint = "annual_return"
	}
	else {
		bannerText = "Performance Report"
		endpoint = "annual_report"
	}
	const reports = await callApi(endpoint);

	return (
		<Box>
			<Banner image="editable/annual_report.jpg" text={bannerText} />

			<Container>
				<Typography sx={{ mb: 2 }} variant="body1">
					Please click on the link to download the annual performance report.
					The report gives detailed information of the work done by OGQ in the
					respective financial year. It also gives they key achievements of the
					athletes supported by OGQ.
				</Typography>

				<Stack direction={'row'} spacing={0} flexWrap={'wrap'}>
					{reports.map((report: any) => (
						<DownloadButton key={report.id} text={report.name} file={report.file} />
					))}


				</Stack>
			</Container>
		</Box>
	);
};

export default AnnualReport;
