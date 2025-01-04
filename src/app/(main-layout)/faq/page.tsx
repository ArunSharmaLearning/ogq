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

const FAQ = async () => {
	return (
		<Box>
			<Banner image="faq.jpg" text="FAQ" />

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
							<Typography>What is Olympic Gold Quest? </Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Olympic Gold Quest (OGQ) is a program of the Foundation for
								Promotion of Sports and Games, a Not for Profit (Section 25)
								company, which is committed to supporting deserving and talented
								Indian sportspersons with an aim to help them win Olympic Gold
								Medals for India.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>What is Olympic Gold Quest objective?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Olympic Gold Quest aims to scout for sports talent in the
								country who can go on to win Olympic Gold Medals. It also
								identifies areas of support for each athlete and works with all
								stakeholders in the process of aiding the deserving talent.
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
								What are the organisational capabilities of Olympic Gold Quest?
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
								What are the disciplines Olympic Gold Quest is looking to
								support?
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
							<Typography>Who are the athletes on Board?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Link sx={{ color: 'black', width: 'fit-content' }} href="sd">Click here to see our athletes profile</Link>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>Who are the athletes on Board?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Short-listing potential athletes with credentials Thorough
								research on athletes, their sport and potential to win an
								Olympic Medal Final selection of athletes post board clearance
								Entire process monitored & reviewed constantly
							</Typography>
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
							<Link sx={{ color: 'black', width: 'fit-content' }} href="/areas-of-support">
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
							<Link sx={{ color: 'black', width: 'fit-content' }} href="/donate-now">Please click here to contribute</Link>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>What are the Tax Benefits for contributors?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								For Indian Tax Payers: u/s 35AC of the IT Act up to 100% of your donation or u/s 80G of the IT Act up to 50% of your donation is deductible.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Stack>
			</Container>
		</Box>
	);
};

export default FAQ;
