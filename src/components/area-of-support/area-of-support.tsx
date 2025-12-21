"use client";
import Banner from "@/components/banner/banner";
import AOS from "aos";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Container,
	Stack,
	Tooltip,
	Typography,
} from "@mui/material";

import { useEffect } from "react";
import Iconify from "@/components/iconify";
import Image from "next/image";

import "./page.scss";
import "aos/dist/aos.css";


export const AreaOfSupportComponent = ({ data }: { data: any }) => {
	useEffect(() => {
		AOS.init({ once: true, duration: 700 });
	}, []);

	return (
		<Box>
			<Banner image="editable/area_of_support.jpg" text="Areas of Support" />

			<Container sx={{ position: "relative" }}>
				<Typography variant="h4" className="underlineAfter">
					Excellence in Athlete Development
				</Typography>

				<Box dangerouslySetInnerHTML={{ __html: data.content }}></Box>

				<Box className="areas-support-md" sx={{ mt: "5rem", mb: "20rem" }}>
					<Box data-aos="fade-up" className="container">
						<Box className="col-md-12 main-support-tab">
							<center>
								<Image unoptimized={true}
									priority
									src="/areas-support-main.png"
									className="img-responsive main-area-support-img"
									data-aos="fade-zoom-in"
									data-aos-duration="2000"
									layout="intrinsic"
									width={459}
									height={378}
									alt="main tab"
								/>
							</center>

							<Tooltip
								data-aos="zoom-in"
								data-aos-delay="100"
								placement="left"
								slotProps={{
									popper: {
										modifiers: [
											{
												name: "offset",
												options: {
													offset: [0, 0],
												},
											},
										],
									},
								}}
								title={
									<Box className="support-tab-content">
										<Typography variant="body1">
											1. OGQ provides support to participate in International/
											Domestic Tournaments that are not funded by the concerned
											Sports Federation
										</Typography>
										<Typography variant="body1">
											2. Includes all minor & major expenses which include
											personal coach or physiotherapist assistance, travel,
											accommodation, food etc
										</Typography>
									</Box>
								}
							>
								<Box className="support-tab support-tab-1">
									<a
										data-toggle="collapse"
										data-target="#demo"
										data-parent="#demo"
									>
										<center>
											<Image unoptimized={true}
												priority
												src="/areas-support-tab1.png"
												alt="Description of the image unoptimized={true}"
												layout="intrinsic"
												width={150}
												height={150}
												className="img-responsive"
											/>
										</center>
									</a>
									<Typography variant="body1" className="text-center">
										Exposure in International/
										<br /> Domestic Tournaments
									</Typography>
								</Box>
							</Tooltip>

							<Tooltip
								data-aos="zoom-in"
								data-aos-delay="200"
								placement="left"
								slotProps={{
									popper: {
										modifiers: [
											{
												name: "offset",
												options: {
													offset: [0, 0],
												},
											},
										],
									},
								}}
								title={
									<Box className="support-tab-content">
										{/* <Typography variant='h6'>Exposure in International/ Domestic Tournaments</Typography> */}
										<Typography variant="body1">
											1. Athletes are sent abroad by OGQ for Training/Coaching
											under some of the best coaches in the World.
										</Typography>
										<Typography variant="body1">
											2. OGQ organises training camps in India with World Class
											coaches to help the athletes improve under expert
											guidance.
										</Typography>
										{/* <!--<Typography variant="body1">3. OGQ goes a step ahead to send parents to accompany junior athletes</Typography>--> */}
									</Box>
								}
							>
								<Box className="support-tab support-tab-2">
									<a
										data-toggle="collapse"
										data-target="#demo2"
										data-parent="#demo"
									>
										<center>
											<Image unoptimized={true}
												priority
												layout="intrinsic"
												width={150}
												height={150}
												src="/areas-support-tab2.png"
												className="img-responsive"
												alt="tab2"
											/>
										</center>
									</a>
									<Typography variant="body1" className="text-center">
										Foreign Coaching
										<br />
										and Training
									</Typography>
								</Box>
							</Tooltip>

							<Tooltip
								data-aos="zoom-in"
								data-aos-delay="300"
								placement="bottom"
								slotProps={{
									popper: {
										modifiers: [
											{
												name: "offset",
												options: {
													offset: [0, -20],
												},
											},
										],
									},
								}}
								title={
									<Box className="support-tab-content">
										{/* <Typography variant='h6'>Exposure in International/ Domestic Tournaments</Typography> */}
										<Typography variant="body1">
											1. OGQ provides support for world class sporting and
											fitness equipment that help the athletes excel at the
											international stage.
										</Typography>
									</Box>
								}
							>
								<Box className="support-tab support-tab-4">
									<a data-toggle="collapse" data-target="#demo3">
										<center>
											<Image unoptimized={true}
												priority
												src="/areas-support-tab3.png"
												className="img-responsive"
												alt="tab3"
												layout="intrinsic"
												width={150}
												height={150}
											/>
										</center>
									</a>
									<Typography variant="body1" className="text-center">
										World Class
										<br />
										Equipment
									</Typography>
								</Box>
							</Tooltip>

							<Tooltip
								data-aos="zoom-in"
								data-aos-delay="400"
								placement="right"
								slotProps={{
									popper: {
										modifiers: [
											{
												name: "offset",
												options: {
													offset: [0, -20],
												},
											},
										],
									},
								}}
								title={
									<Box className="support-tab-content">
										{/* <Typography variant='h6'>Exposure in International/ Domestic Tournaments</Typography> */}
										<Typography variant="body1">
											1. OGQ provides athletes with World Class
											Physiotherapists, Strength and Conditioning coaches,
											Trainers, Sports Psychologists, Sports Nutritionists, etc.
										</Typography>
										<Typography variant="body1">
											2. Regular medical and physical assessment, nutritional
											assistance and mental training.
										</Typography>

										<Typography variant="body1">
											3. A time bound planned rehabilitation program is put in
											place in case of injury and also surgery if required
										</Typography>
									</Box>
								}
							>
								<Box className="support-tab support-tab-5">
									<a data-toggle="collapse" data-target="#demo4">
										<center>
											<Image unoptimized={true}
												priority
												src="/areas-support-tab4.png"
												layout="intrinsic"
												width={150}
												height={150}
												alt="tab3"
												className="img-responsive"
											/>
										</center>
									</a>
									<Typography variant="body1" className="text-center">
										Sports Science
										<br />
										Support
									</Typography>
								</Box>
							</Tooltip>
						</Box>
					</Box>
				</Box>

				<Box className="areas-support-sm">
					<Stack direction="column" spacing={1}>
						<Accordion sx={{ background: "#060363", color: "white" }}>
							<AccordionSummary
								sx={{
									".MuiAccordionSummary-content": {
										gap: 1,
										alignItems: "center",
									},
								}}
								expandIcon={<Iconify icon="ep:arrow-down" />}
								aria-controls="panel2-content"
							>
								<Image unoptimized={true}
									priority
									src="/areas-support-tab1.png"
									className="img-responsive"
									layout="intrinsic"
									width={50}
									height={50}
									alt="tab1"
								/>
								<Typography variant="body1">
									Exposure in International/ Domestic Tournaments
								</Typography>
							</AccordionSummary>
							<AccordionDetails
								sx={{
									color: "black",
									background: "white",
									display: "flex",
									flexDirection: "column",
									gap: 1,
								}}
							>
								<Typography variant="body1">
									1. OGQ provides support to participate in International/
									Domestic Tournaments that are not funded by the concerned
									Sports Federation
								</Typography>
								<Typography variant="body1">
									2. Includes all minor & major expenses which include personal
									coach or physiotherapist assistance, travel, accommodation,
									food etc
								</Typography>
							</AccordionDetails>
						</Accordion>

						<Accordion sx={{ background: "#060363", color: "white" }}>
							<AccordionSummary
								sx={{
									".MuiAccordionSummary-content": {
										gap: 1,
										alignItems: "center",
									},
								}}
								expandIcon={<Iconify icon="ep:arrow-down" />}
								aria-controls="panel2-content"
							>
								<Image unoptimized={true}
									priority
									src="/areas-support-tab2.png"
									className="img-responsive"
									layout="intrinsic"
									width={50}
									height={50}
									alt="tab2"
								/>
								<Typography variant="body1">
									Foreign Training/ Coaching Campus
								</Typography>
							</AccordionSummary>
							<AccordionDetails
								sx={{
									color: "black",
									background: "white",
									display: "flex",
									flexDirection: "column",
									gap: 1,
								}}
							>
								<Typography variant="body1">
									1. Athletes are sent abroad by OGQ for Training/Coaching under
									some of the best coaches in the World.
								</Typography>
								<Typography variant="body1">
									2. OGQ organises training camps in India with World Class
									coaches to help the athletes improve under expert guidance.
								</Typography>
							</AccordionDetails>
						</Accordion>

						<Accordion sx={{ background: "#060363", color: "white" }}>
							<AccordionSummary
								sx={{
									".MuiAccordionSummary-content": {
										gap: 1,
										alignItems: "center",
									},
								}}
								expandIcon={<Iconify icon="ep:arrow-down" />}
								aria-controls="panel2-content"
							>
								<Image unoptimized={true}
									priority
									src="/areas-support-tab2.png"
									className="img-responsive"
									layout="intrinsic"
									width={50}
									height={50}
									alt="tab2"
								/>
								<Typography variant="body1">World Class Equipment</Typography>
							</AccordionSummary>
							<AccordionDetails
								sx={{
									color: "black",
									background: "white",
									display: "flex",
									flexDirection: "column",
									gap: 1,
								}}
							>
								<Typography variant="body1">
									1. OGQ provides support for world class sporting and fitness
									equipment that help the athletes excel at the international
									stage.
								</Typography>
							</AccordionDetails>
						</Accordion>

						<Accordion sx={{ background: "#060363", color: "white" }}>
							<AccordionSummary
								sx={{
									".MuiAccordionSummary-content": {
										gap: 1,
										alignItems: "center",
									},
								}}
								expandIcon={<Iconify icon="ep:arrow-down" />}
								aria-controls="panel2-content"
							>
								<Image unoptimized={true}
									priority
									src="/areas-support-tab2.png"
									className="img-responsive"
									layout="intrinsic"
									width={50}
									height={50}
									alt="tab2"
								/>
								<Typography variant="body1">Sports Science Support</Typography>
							</AccordionSummary>
							<AccordionDetails
								sx={{
									color: "black",
									background: "white",
									display: "flex",
									flexDirection: "column",
									gap: 1,
								}}
							>
								<Typography variant="body1">
									1. OGQ provides athletes with World Class Physiotherapists,
									Strength and Conditioning coaches, Trainers, Sports
									Psychologists, Sports Nutritionists, etc.
								</Typography>
								<Typography variant="body1">
									2. Regular medical and physical assessment, nutritional
									assistance and mental training.
								</Typography>

								<Typography variant="body1">
									3. A time bound planned rehabilitation program is put in place
									in case of injury and also surgery if required
								</Typography>
							</AccordionDetails>
						</Accordion>
					</Stack>
				</Box>
			</Container>
		</Box>
	);
};