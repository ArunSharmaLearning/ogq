import Banner from "@/components/banner/banner";
import DownloadButton from "@/components/button/download/download-button";
import { Box, Container, Stack, Typography } from "@mui/material";

const CSRPolicy = () => {
	return (
		<Box>
			<Banner image="test.jpg" text="Corporate Social Responsibility Policy" />

			<Container>
				<Typography sx={{ mb: 2 }} variant="body1">
					CSR Support to Mary Kom Regional Boxing Foundation (MKRBF): Olympic
					Gold Quest (OGQ), has partnered with Mary Kom Regional Boxing
					Foundation (MKRBF) a not-for-profit organization to support the
					project of MKRBF to enhance the overall performances of the Boxers and
					win medals at State and National Level competitions.
				</Typography>
				<Typography>
					Click on the link below to download
				</Typography>
				<Stack direction={"row"} spacing={0} flexWrap={"wrap"}>
					<DownloadButton text={"Performance Report 2022-2023"} />
					<DownloadButton text={"Performance Report 2022-23"} />
					<DownloadButton text={"Performance Report 2022-23"} />
					<DownloadButton text={"Performance Report 2022-23"} />
					<DownloadButton text={"Performance Report 2022-23"} />
				</Stack>
			</Container>
		</Box>
	);
};

export default CSRPolicy;
