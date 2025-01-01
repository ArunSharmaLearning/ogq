import Banner from "@/components/banner/banner";
import DownloadButton from "@/components/button/download/download-button";
import callApi from "@/hooks/use-swr";
import { Box, Container, Stack, Typography } from "@mui/material";

const AnnualReport = async ({ params }: { params: { type: string } }) => {

	let bannerText, reportText, endpoint;
	if (params.type == 'investor-return') {
		bannerText = "Invetor Return"
		endpoint = "annual_return"
		reportText = "return"
	}
	else {
		bannerText = "Performance Report"
		endpoint = "annual_report"
		reportText = "performance"
	}
	const { data: reports } = await callApi(endpoint);

	return (
		<Box>
			<Banner image="editable/annual_report.jpg" text={bannerText.toUpperCase()} />

			<Container>
				<Typography variant="h4" className="underlineAfter"> OGQ: Excellence in Athlete Development</Typography>

				<Typography sx={{ mb: 2 }} variant="body1">
					Please click on the link to download the annual {reportText} report.
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
