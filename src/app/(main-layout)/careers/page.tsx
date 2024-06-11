import Banner from "@/components/banner/banner";
import Iconify from "@/components/iconify";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Stack, Typography } from "@mui/material";

const History = () => {
	return (
		<Box>
			<Banner image="test.jpg" text="Careers" />

			<Container>
				<Typography variant="body1">
					At Olympic Gold Quest, you&apos;re encouraged to be a leader and work with
					some of the most talented athletes of our country. This will be your
					chance to play an important part in shaping the future Olympic dreams
					of our Indian athletes. Interested?
				</Typography>

				<Typography variant="h6" sx={{ fontSize: '0.85rem', my: 2 }}>We have the following openings currently:</Typography>

				<Stack direction='column' spacing={1}>
					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>High Performance Director – Boxing (Opening: 1)</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
								malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>High Performance Director – Boxing (Opening: 1)</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
								malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<Iconify icon="ep:arrow-down" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<Typography>High Performance Director – Boxing (Opening: 1)</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
								malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Stack>
			</Container>
		</Box>
	);
};

export default History;
