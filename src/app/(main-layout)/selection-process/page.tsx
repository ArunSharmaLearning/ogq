import Banner from "@/components/banner/banner";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const History = () => {
	return (
		<Box>
			<Banner image="test.jpg" text="Selection process" />

			<Container>
				<Typography>
					No two sports are same and hence, the same methodology cannot be
					replicated in the same form for different sports. Having established
					that, it can be said that there are some basic tenets that can be
					followed and adapted according to the sport (or sportsperson) being
					analysed. At OGQ, in line with our mission of supporting athletes to
					win Olympic Gold medals, we are primarily trying to judge if a certain
					athlete has that potential. We can accomplish this through a
					Quantitative analysis (fact-based) or Qualitative one (opinion-based)
					or as it often happens – a mix of both.
				</Typography>
			</Container>

			<Box
				sx={{
					textAlign: "center",
					backgroundImage: "url(/selection-process-heading-banner.jpg)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					padding: "1rem 0",
				}}
			>
				QUANTITATIVE INDICATORS
			</Box>
			<Container>
				<Typography sx={{ mt: 3, mb: 10 }} variant="body1">
					The primary objective of Quantitative analysis is to check Capability
					and Consistency.
				</Typography>

				<Stack direction="row" spacing={1} mb={5}>
					<Box
						sx={{
							p: 2,
							pt: 8,
							backgroundColor: "white",
							color: "black",
							position: "relative",
							"&:before": {
								content: '""',
								position: "absolute",
								top: "-2.4rem",
								left: "3rem",
								width: "90px", // Adjust the size as needed
								height: "90px",
								borderRadius: "50%",
								backgroundColor: "#ffcd0c",
							},
						}}
					>
						<Box sx={{ position: "absolute", top: "-3.8rem", left: "5rem" }}>
							<Image
								src={"/selection-one.png"}
								height={80}
								width={32}
								alt="personality"
							/>
						</Box>
						<Typography variant="body1">
							Whether the athlete has displayed the capability to break into the
							top X in the world and whether he/she is a genuine medal contender
							at the current moment.
							<br />
							This is basically done by looking at historical performances in
							international competitions which have a similar level of
							competition as the Olympics.
							<br />
							The second part is tricky as it is not easy to establish whether a
							competition is close to Olympics in competition or performance
							standards. One needs to look at the competition through the years
							and either compare the winning scores/standards against Olympics
							or determine how many top athletes participate in that
							competition.
						</Typography>
					</Box>

					<Box
						sx={{
							p: 2,
							pt: 8,
							backgroundColor: "white",
							color: "black",
							position: "relative",
							"&:before": {
								content: '""',
								position: "absolute",
								top: "-2.4rem",
								left: "3rem",
								width: "90px", // Adjust the size as needed
								height: "90px",
								borderRadius: "50%",
								backgroundColor: "#ffcd0c",
							},
						}}
					>
						<Box sx={{ position: "absolute", top: "-4rem", left: "5rem" }}>
							<Image
								src={"/selection-two.png"}
								height={80}
								width={54}
								alt="personality"
							/>
						</Box>
						<Typography variant="body1">
							Whether the athlete has displayed the capability to break into the
							top X in the world and whether he/she is a genuine medal contender
							at the current moment.
							<br />
							This is basically done by looking at historical performances in
							international competitions which have a similar level of
							competition as the Olympics.
							<br />
							The second part is tricky as it is not easy to establish whether a
							competition is close to Olympics in competition or performance
							standards. One needs to look at the competition through the years
							and either compare the winning scores/standards against Olympics
							or determine how many top athletes participate in that
							competition.
						</Typography>
					</Box>
				</Stack>

				<Typography>
					OGQ Research Team will also talk to the Coaches, trainers and physios
					associated with the athlete under consideration to look into
					qualitative aspects about the athlete like discipline, dedication,
					commitment and fierce desire to win. Another key aspect while
					researching an athlete is if OGQ can make a difference to the
					performance to the athlete in terms of technical support by providing
					best coaches and access to best training facilities, world class
					equipment, doctors, physios and mental trainers from the OGQ panel of
					experts. Only if OGQ genuinely believes that a significant impact can
					be created to help the athlete challenge for an Olympic gold medal,
					then the decision can be taken to support an athlete.
				</Typography>
			</Container>
		</Box>
	);
};

export default History;
