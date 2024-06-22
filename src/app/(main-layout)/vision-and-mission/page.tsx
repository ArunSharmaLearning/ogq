"use client";

import Banner from "@/components/banner/banner";
import { useAPI } from "@/hooks/use-swr";
import { Box, Container, Stack, Typography } from "@mui/material";
import Loading from "@/components/loader";

const VisionAndMission = () => {
	const { data: post, isLoading, isValidating } = useAPI("vission");

	return (
		<Box component={"main"}>
			<Banner image="test.jpg" text="Vision and Mission" />
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
							To support Indian athletes in winning Olympic gold medals
						</Typography>
					</Box>
				</Stack>
				<Typography variant="h2"> How we do it</Typography>
				{!(isLoading && isValidating) ? post && (
					<Box dangerouslySetInnerHTML={{ __html: post.content }}></Box>
				) :
					<Loading />
				}
				<Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
					It takes just 6 grams of Gold to lift the worth of a nation. Come Join
					Us in our quest for GOLD!
				</Typography>
			</Container>
		</Box>
	)
};

export default VisionAndMission;
