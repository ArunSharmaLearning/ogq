'use client'
import Banner from "@/components/banner/banner";
import Loading from "@/components/loader";
import { useAPI } from "@/hooks/use-swr";
import { Box, Container, Typography } from "@mui/material";

const History = () => {

	const { data, isLoading } = useAPI('history');

	return (
		<Box>
			<head>
				<title>{data?.seo_meta_title}</title>
				<meta name="description" content={data?.seo_meta_description} />
				<link rel="canonical" href={data?.seo_canonical_uri} />
				<meta property="og:title" content={data?.seo_meta_title} />
				<meta property="og:description" content={data?.seo_meta_description} />
				<meta property="og:url" content={data?.seo_canonical_uri} />
				<meta property="og:type" content="website" />
			</head>
			<Banner image="editable/history.jpg" text="HISTORY" />
			<Container>
				{isLoading ?
					<Loading /> :
					<>
						<Typography variant="h4" className="underlineAfter">
							Transforming Indian Athlete Support</Typography>
						<Box dangerouslySetInnerHTML={{ __html: data?.content }}></Box>
					</>
				}
			</Container>
		</Box>
	);
};

export default History;