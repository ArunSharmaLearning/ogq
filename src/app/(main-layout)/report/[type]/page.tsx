import Banner from "@/components/banner/banner";
import DownloadButton from "@/components/button/download/download-button";
import { Box, Container, Stack, Typography } from "@mui/material";

const AnnualReport = ({ params }: { params: { type: string } }) => {
	return (
		<Box>
			<Banner image="test.jpg" text={params.type} />

			<Container>
				<Typography sx={{ mb: 2 }} variant="body1">
					Please click on the link to download the annual performance report.
					The report gives detailed information of the work done by OGQ in the
					respective financial year. It also gives they key achievements of the
					athletes supported by OGQ.
				</Typography>

				<Stack direction={'row'} spacing={0} flexWrap={'wrap'}>
					<DownloadButton text={'Performance Report 2022-23'} />
					<DownloadButton text={'Performance Report 2022-23'} />
					<DownloadButton text={'Performance Report 2022-23'} />
					<DownloadButton text={'Performance Report 2022-23'} />
					<DownloadButton text={'Performance Report 2022-23'} />
				</Stack>
			</Container>
		</Box>
	);
};

export default AnnualReport;
