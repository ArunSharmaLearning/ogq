import Banner from "@/components/banner/banner";
import { Link } from "@/components/footer/footer.style";
import Iconify from "@/components/iconify";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Container,
	Stack,
	Typography,
} from "@mui/material";


export async function generateMetadata() {
	return {
		title: `FAQ | OGQ`,
	}
}

const FAQ = async () => {
	return (
		<Box>
			<Banner image="editable/faq.jpg" text="FAQ" />

			<Container>
				<Typography mb={3} variant="h4" className="underlineAfter">
					Commonly Asked Questions
				</Typography>
				<Stack direction="column" spacing={1}>
					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>What is OGQ? </Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								OGQ is a program of the Foundation for Promotion of Sports and
								Games, a Not for Profit (Section 8) company, founded by India’s
								sports legends Geet Sethi and Prakash Padukone with a mission to
								help Indian athletes win Gold Medals for India at the Olympics
								and Paralympics.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>What sports are supported by OGQ??</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								OGQ currently supports athletes and para athletes in 11 Olympic
								Sports (Archery, Badminton, Boxing, Shooting, Wrestling,
								Athletics, Swimming, Table Tennis, Weightlifting, Squash,
								Tennis) and 9 Paralympic Sports (Para Athletics, Para Archery,
								Para Badminton, Para Shooting, Para Table Tennis, Para Canoe,
								Blind Judo, Para Swimming, Powerlifting)
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>
								What are the parameters of support to athletes and para athletes
								implemented by OGQ?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								1) Domestic and International Training and Tournaments
								<br />
								2) Foreign and Domestic Coaching Support
								<br />
								3) Sports Science Support
								<br />
								4) Equipment and Sports Kit Support
								<br />
								5) Monthly Stipend to Athletes and Para Athletes
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>
								What has been the performance of athletes supported by OGQ at
								the Olympics?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								13 out of the 21 medal winners for India at the London 2012, Rio
								2016, Tokyo 2020 and Paris 2024 were supported by OGQ
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>
								What has been the performance of para athletes supported by OGQ
								at the Paralympics?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								OGQ began support to para athletes in 2019. Since then, 35 out
								of the 48 medals for India at the Tokyo 2020 & Paris 2024
								Paralympics were won by para athletes supported by OGQ
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>Who are the board of directors of OGQ?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Link
								href="/team/india/board%20of%20directors"
								sx={{ color: "black", width: "fit-content" }}
							>
								Click here to see our Board of Directors
							</Link>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>What is OGQ objective?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								OGQ aims to scout for sports talent in the country who can go on
								to win Olympic Gold Medals. It also identifies areas of support
								for each athlete and works with all stakeholders in the process
								of aiding the deserving talent.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>
								What are the organizational capabilities of OGQ?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Renowned sporting icons provide the vision and road-map to
								structure the support system for our athletes. Business leaders
								to provide monitoring and enable corporate participation.A
								full-fledged research team to identify potential talent,
								training needs and support requirements. OGQ has supported the
								training of more than 100 athletes since inception.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>Who are the members of the Foundation?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								The executive committee includes: - Geet Sethi: 8 times World
								Billiards Champion, Padma Shri and Khel Ratna Awardee - Prakash
								Padukone: All England Badminton Champion, Padma Shri, Arjuna
								Awardee - Niraj Bajaj: 4 time National Table Tennis Champion,
								Arjuna Awardee and Director, Bajaj group of Companies -
								Viswanathan Anand: 5 time World Chess Champion, Padma Vibhushan,
								Khel Ratna Awardee - Leander Paes: 14 time Grand Slam Champion,
								Olympic Bronze Medalist, Padma Bhushan, Khel Ratna Awardee - R.
								Ramaraj: Senior Advisor, Sequoia Capital - Shitin Desai: Founder
								Directore, DSP Merrill Lynch (since retired) - Rakesh Khanna:
								Founding Partner, Ambit RSM (since retired) - Neeraj Bharadwaj:
								Managing Director, The Carlyle Group - Deepika Padukone:
								Acclaimed Actor - Viren Rasquinha: Former Indian Hockey Captain,
								Olympian & Arjuna Awardee is the Chief Executive Officer of the
								foundation
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>What is India’s Olympic Gold Medal tally?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								India has won 9 Olympic Gold Medals. 8 of these medals have been
								in Hockey and Abhinav Bindra’s Gold in Shooting at Beijing
								Olympics 2008 was India’s first Individual Olympic Gold.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>
								What is the need for private initiatives like Olympic Gold
								Quest?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Despite being a country of over a billion, India has won only
								ONE individual Gold Medal at the Olympics. This is primarily due
								to the lack of expert guidance, inadequate funding and the
								absence of world class sporting infrastructure in the country.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>
								What are the disciplines OGQ is looking to support?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								OGQ has short-listed the following six disciplines as the ones
								in which Indian athletes have the strongest potential: Shooting,
								Athletics, Boxing, Wrestling, Archery and Badminton.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>Who are the athletes supported by OGQ?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Link
								sx={{ color: "black", width: "fit-content" }}
								href="/olympics/archery"
							>
								Click here to see our Athletes profile
							</Link>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>
								Who are the para athletes supported by OGQ?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Link
								sx={{ color: "black", width: "fit-content" }}
								href="/paralympics/archery"
							>
								Click here to see our Para Athletes profile
							</Link>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>How are the funds utilized?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Link
								sx={{ color: "black", width: "fit-content" }}
								href="/areas-of-support"
							>
								Click here to see the areas of support for funds utilization
							</Link>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>
								What are the average funds required by an athlete each year?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Approximately Rupees Fifteen-Sixty Lakhs per senior athlete per
								year.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>How can you contribute?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Link
								sx={{ color: "black", width: "fit-content" }}
								href="/donate-now"
							>
								Please click here to donate
							</Link>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>
								What are the Tax Benefits for contributors?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								- Donations to OGQ are eligible for 50% tax deduction under
								Section 80G of the Indian Income Tax Act.
								<br />- OGQ is recognized as a tax-exempt nonprofit under
								section 501(c)(3) of the US Internal Revenue Code.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Stack>
			</Container>
		</Box>
	);
};

export default FAQ;
