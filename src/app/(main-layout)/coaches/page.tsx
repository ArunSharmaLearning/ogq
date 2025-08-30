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
import CountUp from "react-countup";

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
				image="CP-1.gif"
				text={""}
				subText={""}
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
						backgroundColor: "#cfcfcf",
						padding: 3,
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
							sx={{ textAlign: "center", margin: "auto" }}
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
					direction="column"
					className="vision-mission"
					justifyContent={"space-between"}
					gap={2}
					mt={4}
					padding={{ xs: 3, sm: 10 }}
				>
					<Stack direction={{ xs: 'column', sm: 'row' }} flex={1} justifyContent={{ xs: 'flex-start', sm: 'space-between' }} gap={{ sm: 6, xs: 1 }} alignItems={'flex-start'}>
						<Typography variant="h3" color='white' className="header-underline">
							VISION
						</Typography>

						<Typography fontWeight={600} width={{ sm: '65%', xs: '100%' }}
							dangerouslySetInnerHTML={{ __html: vision?.content }}
						></Typography>
					</Stack>

					<Stack direction={{ xs: 'column', sm: 'row' }} flex={1} justifyContent={'space-between'} gap={{ sm: 6, xs: 1 }} alignItems={'flex-start'}>
						<Typography color='white' variant="h3" className="header-underline">
							MISSION
						</Typography>

						<Typography fontWeight={600} width={{ sm: '65%', xs: '100%' }}
							dangerouslySetInnerHTML={{ __html: mission?.content }}
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

				<Box
					sx={{
						mt: 6,
						mb: 4,
						backgroundColor: '#2c018f',
						color: 'white',
						padding: { xs: "2rem", sm: "3rem 6rem" }
					}}
				>
					<Typography variant="h4" lineHeight={1.5} textTransform={'uppercase'} mb={{ xs: 5, sm: 8 }} className="underlineAfter">
						Impact over the last {cpStats?.number_of_years} years -
					</Typography>

					<Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'} gap={6} mb={4}>
						<Stack justifyContent={'center'} alignItems={'center'}>
							<Typography
								sx={{
									lineHeight: 0.7,
									mb: 1,
									fontSize: theme => `${theme.typography.h1.fontSize} !important`,
								}}
								variant="h2">
								{!cpStatLoading && <CountUp
									style={{
										display: "inline-block",
										fontSize: 'inherit'
									}}
									enableScrollSpy
									scrollSpyOnce
									preserveValue
									start={0}
									end={cpStats.coaches_upskilled}
									duration={2}
									formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
								/>
								}
							</Typography>


							<Typography variant="h5" borderBottom={'2px solid #b5b5b5'} pb={0} mb={0.5}>
								coaches trained
							</Typography>

							<Typography variant="h6">
								across programs
							</Typography>
						</Stack>

						<Stack justifyContent={'center'} alignItems={'center'}>
							<Typography
								sx={{
									lineHeight: 0.7,
									mb: 1,
									fontSize: theme => `${theme.typography.h1.fontSize} !important`,
								}}
								variant="h2">

								{!cpStatLoading && <CountUp
									style={{
										display: "inline-block",
										fontSize: 'inherit'
									}}
									enableScrollSpy
									scrollSpyOnce
									preserveValue
									start={0}
									end={cpStats.athletes_impacted}
									duration={2}
									formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}+`)}
								/>
								}
							</Typography>


							<Typography variant="h5" borderBottom={'2px solid #b5b5b5'} pb={0} mb={0.5}>
								athletes impacted
							</Typography>

							<Typography variant="h6">
								indirectly
							</Typography>
						</Stack>

						<Stack justifyContent={'center'} alignItems={'center'}>
							<Typography
								sx={{
									lineHeight: 0.7,
									mb: 1,
									fontSize: theme => `${theme.typography.h1.fontSize} !important`,
								}}
								variant="h2">
								{!cpStatLoading && <CountUp
									style={{
										display: "inline-block",
										fontSize: 'inherit'
									}}
									enableScrollSpy
									scrollSpyOnce
									preserveValue
									start={0}
									end={cpStats.athletes_represented}
									duration={2}
									formattingFn={(num) => (num < 10 ? ` 0${num} ` : ` ${num}`)}
								/>
								}
							</Typography>


							<Typography variant="h5" borderBottom={'2px solid #b5b5b5'} pb={0} mb={0.5}>
								states represented
							</Typography>

							<Typography variant="h6">
								ensuring national outreach
							</Typography>
						</Stack>
					</Stack>
				</Box>


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
