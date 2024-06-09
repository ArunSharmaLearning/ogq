import Banner from "@/components/banner/banner";
import DescriptionCard from "@/components/cards/description/description-card";
import { Box, Container, List, ListItem, Stack, Tooltip, Typography } from "@mui/material";
import './page.scss'


const AreaOfSupport = () => {
	return (
		<Box>
			<Banner image="test.jpg" text="Areas Of Support" />

			<Box >
				<Container sx={{ position: 'relative' }}>
					<Typography>
						We, at Olympic Gold Quest, scout for athletes who have displayed in
						them the drive and the potential to win medals at the Olympic Games.
						The selection takes place through a well-laid down process that has
						been developed by the experts and has been chiseled with experience.
						Once the athletes are selected, OGQ assumes all responsibility for
						providing them with full-fledged support in their preparation towards
						winning at the Olympic Games. The support that we provide to our
						athletes falls into the following broad categories:
					</Typography>

					<Box sx={{ mt: '10rem', mb: '20rem' }}>
						<section className="areas-support">
							<Box className="container">
								<Box className="col-md-12 main-support-tab">
									<center><img src="/areas-support-main.png" className="img-responsive support-main-infographic"
										data-aos="fade-zoom-in" data-aos-duration="2000" /></center>

									<Tooltip placement="left" slotProps={{
										popper: {
											modifiers: [
												{
													name: 'offset',
													options: {
														offset: [0, 0],
													},
												},
											],
										},
									}} title={
										<Box sx={{
											p: 2
										}} className=" support-tab-content support-tab-content-1">
											{/* <Typography variant='h6'>Participation in International/ Domestic Tournaments</Typography> */}
											<Typography>1. OGQ provides support to participate in International/ Domestic Tournaments that are not funded by the
												concerned Sports Federation </Typography>
											<Typography>2. Includes all minor & major expenses which include personal coach or physiotherapist assistance, travel,
												accommodation, food etc</Typography>
											{/* <!--<p>3. OGQ goes a step ahead to send parents to accompany junior athletes</p>--> */}
										</Box>
									}>
										<Box className="support-tab support-tab-1" data-aos="flip-left" data-aos-delay="100">
											<a data-toggle="collapse" data-target="#demo" data-parent="#demo" >
												<center><img src="/areas-support-tab1.png" className="img-responsive" /></center>
											</a>
											<p className="text-center">Participation in International/<br /> Domestic Tournaments</p>


										</Box>
									</Tooltip>



									<Tooltip placement="left" slotProps={{
										popper: {
											modifiers: [
												{
													name: 'offset',
													options: {
														offset: [0, 0],
													},
												},
											],
										},
									}} title={
										<Box sx={{
											p: 2
										}} className=" support-tab-content support-tab-content-1">
											{/* <Typography variant='h6'>Participation in International/ Domestic Tournaments</Typography> */}
											<Typography>1. OGQ provides support to participate in International/ Domestic Tournaments that are not funded by the
												concerned Sports Federation </Typography>
											<Typography>2. Includes all minor & major expenses which include personal coach or physiotherapist assistance, travel,
												accommodation, food etc</Typography>
											{/* <!--<p>3. OGQ goes a step ahead to send parents to accompany junior athletes</p>--> */}
										</Box>
									}>
										<Box className="support-tab support-tab-2" data-aos="flip-left" data-aos-delay="200">
											<a data-toggle="collapse" data-target="#demo2" data-parent="#demo" >
												<center><img src="/areas-support-tab2.png" className="img-responsive" alt="sldk" /></center>
											</a>
											<p className="text-center">Foreign Coaching<br />and Training</p>
										</Box>
									</Tooltip>


									<Tooltip placement="bottom" slotProps={{
										popper: {
											modifiers: [
												{
													name: 'offset',
													options: {
														offset: [0, -20],
													},
												},
											],
										},
									}} title={
										<Box sx={{
											p: 2
										}} className=" support-tab-content support-tab-content-1">
											{/* <Typography variant='h6'>Participation in International/ Domestic Tournaments</Typography> */}
											<Typography>1. OGQ provides support to participate in International/ Domestic Tournaments that are not funded by the
												concerned Sports Federation </Typography>

											{/* <!--<p>3. OGQ goes a step ahead to send parents to accompany junior athletes</p>--> */}
										</Box>
									}>
										<Box className="support-tab support-tab-3" data-aos="flip-left" data-aos-delay="300">
											<a data-toggle="collapse" data-target="#demo3" >
												<center><img src="/areas-support-tab3.png" className="img-responsive" /></center>
											</a>
											<p className="text-center">World className<br />Equipment</p>
										</Box>
									</Tooltip>

									<Tooltip placement="right" slotProps={{
										popper: {
											modifiers: [
												{
													name: 'offset',
													options: {
														offset: [0, -20],
													},
												},
											],
										},
									}} title={
										<Box sx={{
											p: 2
										}} className=" support-tab-content support-tab-content-1">
											{/* <Typography variant='h6'>Participation in International/ Domestic Tournaments</Typography> */}
											<Typography>1. OGQ provides support to participate in International/ Domestic Tournaments that are not funded by the
												concerned Sports Federation </Typography>
											<Typography>2. Includes all minor & major expenses which include personal coach or physiotherapist assistance, travel,
												accommodation, food etc</Typography>
											{/* <!--<p>3. OGQ goes a step ahead to send parents to accompany junior athletes</p>--> */}
										</Box>
									}>

										<Box className="support-tab support-tab-4" data-aos="flip-left" data-aos-delay="400">
											<a data-toggle="collapse" data-target="#demo4" >
												<center><img src="/areas-support-tab4.png" className="img-responsive" /></center>
											</a>
											<p className="text-center">Sports Science<br />Support</p>
										</Box>
									</Tooltip>


									<Tooltip placement="right" slotProps={{
										popper: {
											modifiers: [
												{
													name: 'offset',
													options: {
														offset: [0, -20],
													},
												},
											],
										},
									}} title={
										<Box sx={{
											p: 2
										}} className=" support-tab-content support-tab-content-1">
											{/* <Typography variant='h6'>Participation in International/ Domestic Tournaments</Typography> */}
											<Typography>1. OGQ provides support to participate in International/ Domestic Tournaments that are not funded by the
												concerned Sports Federation </Typography>
											<Typography>2. Includes all minor & major expenses which include personal coach or physiotherapist assistance, travel,
												accommodation, food etc</Typography>
											{/* <!--<p>3. OGQ goes a step ahead to send parents to accompany junior athletes</p>--> */}
										</Box>
									}>

										<Box className="support-tab support-tab-5" data-aos="flip-left" data-aos-delay="500">
											<a data-toggle="collapse" data-target="#demo5" >
												<center><img src="/areas-support-tab5.png" className="img-responsive" /></center>
											</a>
											<p className="text-center">Administrative<br />Support</p>
										</Box>
									</Tooltip>

								</Box>




							</Box>
						</section>

					</Box >

					<Box className='hover-effect'>
						{/* <Stack className="participation" direction={'column'} position={'absolute'} backgroundColor={'white'} p={4} zIndex={3} borderRadius={2} top={'50%'} left={'0%'} width='24rem'>
							<Typography variant="h6">title</Typography>

							<Typography>
								1. OGQ provides support to participate in International/ Domestic Tournaments that are not funded by the concerned Sports Federation
								<br />
								2. Includes all minor & major expenses which include personal coach or physiotherapist assistance, travel, accommodation, food etc
							</Typography>
						</Stack>

						<Stack className="foreign" direction={'column'} position={'absolute'} backgroundColor={'white'} p={4} zIndex={3} borderRadius={2} top={'90%'} left={'10%'} width='24rem'>
							<Typography variant="h6">title</Typography>

							<Typography>
								1. OGQ provides support to participate in International/ Domestic Tournaments that are not funded by the concerned Sports Federation
								<br />
								2. Includes all minor & major expenses which include personal coach or physiotherapist assistance, travel, accommodation, food etc
							</Typography>
						</Stack>

						<Stack className="equipment" direction={'column'} position={'absolute'} backgroundColor={'white'} p={4} zIndex={3} borderRadius={2} top={'110%'} left={'34%'} width='24rem'>
							<Typography variant="h6">title</Typography>

							<Typography>
								1. OGQ provides support to participate in International/ Domestic Tournaments that are not funded by the concerned Sports Federation
								<br />
								2. Includes all minor & major expenses which include personal coach or physiotherapist assistance, travel, accommodation, food etc
							</Typography>
						</Stack>

						<Stack className="sports" direction={'column'} position={'absolute'} backgroundColor={'white'} p={4} zIndex={3} borderRadius={2} top={'90%'} left={'59%'} width='24rem'>
							<Typography variant="h6">title</Typography>

							<Typography>
								1. OGQ provides support to participate in International/ Domestic Tournaments that are not funded by the concerned Sports Federation
								<br />
								2. Includes all minor & major expenses which include personal coach or physiotherapist assistance, travel, accommodation, food etc
							</Typography>
						</Stack>

						<Stack className="administrative" direction={'column'} position={'absolute'} backgroundColor={'white'} p={4} zIndex={3} borderRadius={2} top={'50%'} left={'67%'} width='24rem'>
							<Typography variant="h6">title</Typography>

							<Typography>
								1. OGQ provides support to participate in International/ Domestic Tournaments that are not funded by the concerned Sports Federation
								<br />
								2. Includes all minor & major expenses which include personal coach or physiotherapist assistance, travel, accommodation, food etc
							</Typography>
						</Stack> */}
					</Box>
				</Container >

			</Box >
		</Box >
	);
};

export default AreaOfSupport;
