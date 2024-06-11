"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import {
	Box,
	Button,
	Container,
	FormControl,
	FormControlLabel,
	FormLabel,
	Paper,
	Radio,
	RadioGroup,
	Stack,
	Tab,
	Tabs,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";
import * as Yup from "yup";
import CommonButton from "@/components/button/common/common-button";

const DonationUsa = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const handleSubmit = (values: any) => {
		//TODO

		console.log("VALUES", values);
	};

	const a11yProps = (index: number) => {
		return {
			id: `simple-tab-${index}`,
			"aria-controls": `simple-tabpanel-${index}`,
		};
	};

	return (
		<Paper
			elevation={1}
			sx={{
				p: 1,
				position: "relative",
				flex: 1,
				height: "fit-content",
				maxWidth: "50%",
			}}
		>
			<Stack
				position={"absolute"}
				sx={{
					transform: "translate(-50%, -50%)",
					left: "50%",
					top: 15,
				}}
			>
				<Image src="/usa_only.png" width={142} height={84} alt="india" />
			</Stack>
			<Tabs sx={{ mt: 5 }} value={value} onChange={handleChange}>
				<Tab label="Credit / Debit / paypal" {...a11yProps(0)} />
				<Tab label="Cheque Deposit" {...a11yProps(1)} />
			</Tabs>

			<Stack
				p={2.5}
				role="tabpanel"
				hidden={value !== 0}
				id={`simple-tabpanel-${0}`}
				aria-labelledby={`simple-tab-${0}`}
			>
				<Typography>
					In case you want to make an online payment, please click here:
				</Typography>
				<Image
					src="/donate-paypal.png"
					width={200}
					height={60}
					alt="payment gateway"
				/>

				<Box sx={{ width: '100%', textAlign: 'center' }}>
					<CommonButton type="submit">
						Donate Now
					</CommonButton>
				</Box>


			</Stack>

			<Stack
				p={2.5}
				spacing={1}
				role="tabpanel"
				hidden={value !== 1}
				id={`simple-tabpanel-${1}`}
				aria-labelledby={`simple-tab-${1}`}
			>
				<Typography>
					In case you want to send us a check , please courier it to our
					foundation address
				</Typography>

				<Typography>
					The check should be in favor of &quot;Foundation for Promotion of
					Sports and Games&quot;
				</Typography>
				<Box>
					<Typography
						variant="h6"
						sx={(theme) => ({ color: theme.palette.primary.main })}
					>
						The post should be addressed to:
					</Typography>
					<Typography>Foundation for Promotion of Sports and Games
					</Typography>
				</Box>

				<Box>
					<Typography
						variant="h6"
						sx={(theme) => ({ color: theme.palette.primary.main })}
					>
						Foundation Address:
					</Typography>
					<Typography>15466 Los Gatos Blvd #109333,<br />
						Los Gatos, CA 95032
					</Typography>
				</Box>
			</Stack>
			<Typography textAlign={"center"} mt={1} padding={2.5} pt={0} variant="h6">
				For any queries please contact neha@ogq.org
			</Typography>
		</Paper>
	);
};

export default DonationUsa;
