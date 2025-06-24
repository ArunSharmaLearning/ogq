"use client";
import Banner from "@/components/banner/banner";
import CPCard from "@/components/cards/cp";
import { CarouselWrapper } from "@/components/carousel";
import { API_URL } from "@/constants/api";
import { useAPI } from "@/hooks/use-swr";
import { Box, Container, Typography, Stack, useTheme } from "@mui/material";
import Image from "next/image";
import './page.scss';

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Link from "next/link";

const CoachesProgram = () => {
	const theme = useTheme();
	const { data: carouselData, isLoading: carouselLoading } = useAPI(
		"homepage-banner",
		2
	);

	const { data: aboutCoaches, isLoading: aboutCoachesLoading } = useAPI(
		"about-coaches",
		2
	);

	const { data: vision, isLoading: visionLoading } = useAPI(
		"vision",
		2
	);

	const { data: mission, isLoading: missionLoading } = useAPI(
		"mission",
		2
	);

	const { data: history, isLoading: historyLoading } = useAPI(
		"history",
		2
	);

	const { data: cpStats, isLoading: cpStatLoading } = useAPI(
		"coaches-program-stats",
		2
	);

	const { data: execPartner, isLoading: execPartnerLoading } = useAPI("execution-partners", 2);

	const programCFP = useAPI('cfp', 2);
	const programCEP = useAPI('cep', 2);
	const programCLP = useAPI('clp', 2);


	return (
		<Box>
			<Banner
				image={`${API_URL}${carouselData?.image}`}
				text={carouselData?.heading}
				subText={carouselData?.sub_heading}
			/>

			<Container>
				<Typography variant="h4" fontSize={'1.2rem'} textAlign={"center"} maxWidth={{ sm: '65%' }} mx={'auto'} my={3}>
					The OGQ Coaches Program
					is a comprehensive learning and training initiative
					aimed at developing high-performance Indian coaches
					across Olympic and Paralympic sports.
				</Typography>

				<Box
					sx={{
						height: { xs: "10rem", sm: "24rem" },
						position: "relative",
						display: "flex",
						justifyContent: "center",
						mt: 6,
					}}
				>
					<Image
						fill
						priority
						unoptimized
						src={"/editable/coaches-program.jpeg"}
						alt="news"
					/>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", sm: "row" },
						justifyContent: "space-between",
						gap: 2,
						mt: 4,
					}}
				>
					<Box
						sx={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Typography
							variant="h2"
							sx={{ textAlign: "center" }}
							className="underlineAfter"
						>
							About the Program
						</Typography>
					</Box>
					<Box>
						<Typography
							dangerouslySetInnerHTML={{ __html: aboutCoaches?.content }}
						></Typography>
					</Box>
				</Box>

				<Stack
					direction={{ xs: "column", sm: "row" }}
					justifyContent={"space-between"}
					gap={2}
					mt={4}
				>
					<Stack flex={1}>
						<Typography variant="h4" mt={4} className="underlineAfter">
							VISION
						</Typography>

						<Typography
							dangerouslySetInnerHTML={{ __html: vision?.content }}
						></Typography>
					</Stack>

					<Stack flex={1}>
						<Typography variant="h4" mt={4} className="underlineAfter">
							MISSION
						</Typography>

						<Typography
							dangerouslySetInnerHTML={{ __html: mission?.content }}
						></Typography>
					</Stack>
					<Stack flex={1}>
						<Typography variant="h4" mt={4} className="underlineAfter">
							History
						</Typography>

						<Typography
							dangerouslySetInnerHTML={{ __html: history?.content }}
						></Typography>
					</Stack>
				</Stack>

				<Box>
					<Typography textAlign={"center"} variant="h2" mt={4}>
						Program Structure
					</Typography>

					<Typography
						variant="body1"
						mt={2}
						mb={4}
						textAlign={"center"}
						maxWidth={800}
						marginX={"auto"}
					>
						The OGQ Coaches Program follows a three-tiered structure that
						provides a complete development pathway for high-performance
						coaches. Each tier builds on the previous one, ensuring that coaches
						progress through fundamental, high-performance, and leadership
						training
					</Typography>

					<Stack
						direction={{ xs: "column", sm: "row" }}
						gap={5}
						justifyContent={"space-between"}
					>
						<CPCard
							link="cep"
							image={`${API_URL}/${programCEP?.data?.front_image}`}
							heading="Stage 1"
							subHeading={programCEP?.data?.caption}
							bgColor="#e8bedd"
						/>

						<CPCard
							link="cfp"
							image={`${API_URL}/${programCFP?.data?.front_image}`}
							heading="Stage 2"
							subHeading={programCFP?.data?.caption}
							bgColor="#d2e0b4"
						/>

						<CPCard
							link="clp"
							image={`${API_URL}/${programCLP?.data?.front_image}`}
							heading="Stage 3"
							subHeading={programCLP?.data?.caption}
							bgColor="#d9f1ff"
						/>
					</Stack>
				</Box>
			</Container>

			<Box
				sx={{
					mt: 6,
					mb: 4,
					py: 4,
					border: "5px solid #000000",
					borderWidth: "5px 0",
					paddingTop: 2,
					backgroundColor: theme.palette.primary.dark,
				}}
			>
				<Container>
					<Typography variant="h2" mb={4} maxWidth={400} lineHeight={1.25}>
						Coaches Program Impact over {cpStats?.number_of_years} years
					</Typography>

					<VerticalTimeline layout="1-column-Left" className="custom-vertical-timeline">
						<VerticalTimelineElement
							visible
							iconStyle={{
								background: theme.palette.primary.main,
								color: "#fff",
							}}
						>
							<Box>
								<Typography className="underlineAfter"
									sx={{
										lineHeight: 1.25,
										mb: 1,
										fontSize: theme => `${theme.typography.h2.fontSize} !important`,
									}}
									variant="h2">{cpStats?.coaches_upskilled}</Typography>

								<Typography variant="h5">
									Coaches upskilled through Coaches Program
								</Typography>
							</Box>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							visible
							iconStyle={{
								background: theme.palette.primary.main,
								color: "#fff",
							}}
						>
							<Typography className="underlineAfter" sx={{
								lineHeight: 1.25,
								mb: 1,
								fontSize: theme => `${theme.typography.h2.fontSize} !important`,
							}} variant="h2">{cpStats?.athletes_impacted}</Typography>

							<Typography variant="h5">
								Athletes Impacted through Coaches Program
							</Typography>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							visible
							iconStyle={{
								background: theme.palette.primary.main,
								color: "#fff",
							}}
						>
							<Typography variant="h2" className="underlineAfter" sx={{
								lineHeight: 1.25,
								mb: 1,
								fontSize: theme => `${theme.typography.h2.fontSize} !important`,
							}}>
								{cpStats?.athletes_represented}
							</Typography>
							{/* <hr
								style={{
									border: "none",
									height: "2px",
									backgroundColor: theme.palette.primary.main,
									margin: "-2px",
									width: "25%",
								}}
							/> */}
							<Typography variant="h5">
								Coaches trainees represented India at Paris Olympics &
								Paralympics
							</Typography>
						</VerticalTimelineElement>
					</VerticalTimeline>

				</Container>

			</Box>
			<Container>
				<Box>
					<Typography mx={'auto'} textAlign={'center'} width={{ sm: '45%', xs: '100%' }}
						variant="h1">
						Our Knowledge &
						Execution Partners
					</Typography>

					<Typography textAlign={'center'} variant="subtitle1" mt={2} mb={4}>
						Thanks to our knowledge and Execution partners
						for powering our vision and excellence
					</Typography>
				</Box>

				<Box sx={{ padding: { xs: "0 10vw", sm: "0 20vw" } }}>
					<CarouselWrapper slides={2}>
						{!execPartnerLoading && (
							execPartner?.map((partner) => (
								<Box key={partner.id} sx={{ maxHeight: '200px', minHeight: '120px', position: 'relative' }}>
									<Link title={partner.name} href={partner.url} target="_blank">
										<Image src={API_URL + "/" + partner.image} fill unoptimized alt="partner" />
									</Link>
								</Box>
							))
						)}
					</CarouselWrapper>
				</Box>
			</Container >
		</Box >
	);
};


export default CoachesProgram;
