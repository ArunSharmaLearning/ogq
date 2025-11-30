"use client";

import Banner from "@/components/banner/banner";
import { useAPI } from "@/hooks/use-swr";
import { Box, Container, Stack, Typography } from "@mui/material";
import Loading from "@/components/loader";

const VisionAndMission = () => {
	const { data: post, isLoading } = useAPI("vission");

	return (
		<>
			<head>
				<title>{post?.seo_meta_title}</title>
				<meta name="description" content={
					post?.seo_meta_description} />
				<link rel="canonical" href={post?.seo_canonical_uri} />
				<meta property="og:title" content={post?.seo_meta_title} />
				<meta property="og:description" content={post?.seo_meta_description} />
				<meta property="og:url" content={post?.seo_canonical_uri} />
				<meta property="og:type" content="website" />
			</head>

			<Box component={"main"}>
				<Banner image="editable/vision.jpg" text="Vision and Mission" />
				<Container>
					<Stack direction={{ sm: "row" }} my={2}>
						<Box
							sx={(theme) => ({
								flex: 1,
								border: `1px solid ${theme.palette.primary.main}`,
								p: 3,
								backgroundColor: theme.palette.common.white,
								color: theme.palette.common.black,
								"&:hover": {
									backgroundColor: theme.palette.primary.main,
									color: theme.palette.common.black,
								},
							})}
						>
							<Typography variant="h4">Vision</Typography>

							<Typography variant="body1">
								To scout for potential medal talent, to help identify areas of
								support, to work with all stakeholders to aid deserving talen
							</Typography>
						</Box>

						<Box
							sx={(theme) => ({
								flex: 1,
								p: 3,
								border: `1px solid ${theme.palette.primary.main}`,
								backgroundColor: theme.palette.secondary.main,
								color: theme.palette.common.white,
								"&:hover": {
									backgroundColor: theme.palette.primary.main,
									color: theme.palette.common.black,
								},
							})}
						>
							<Typography variant="h4">Mission</Typography>
							<Typography variant="body1">
								To support Indian athletes win Olympic and Paralympic gold medals
							</Typography>
						</Box>
					</Stack>
					<Typography variant="h2" sx={{ mx: 'auto', width: 'fit-content' }} className="underlineAfter"> How we do it</Typography>
					{!isLoading ? (
						<Box dangerouslySetInnerHTML={{ __html: post?.content }}></Box>
					) :
						<Loading />
					}
				</Container>
			</Box>
		</>
	)
};

export default VisionAndMission;
