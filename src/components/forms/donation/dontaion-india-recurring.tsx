"use client";
import { Form, Formik } from "formik";
import Image from "next/image";
import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { useEffect } from "react";
import * as Yup from "yup";
import CommonButton from "@/components/button/common/common-button";
import { OGQ_BANKING_EMAIL_TOKEN } from "@/constants/api";

const DonationIndiaRecurring = () => {
	const handleSubmit = (values: any) => {
		new (window as any).Email.send({
			SecureToken: OGQ_BANKING_EMAIL_TOKEN,
			To: 'ogqbanking@gmail.com',
			From: values.email,
			Subject: "Donation Details",
			Body: `
    Name: ${values.name}<br>
    Email: ${values.email}<br>
    Mobile Number: ${values.mobile}<br>
    Address: ${values.address}<br>
    PAN: ${values.pan}<br>
	Duration Type: ${values.durationType}<br>
    Duration: ${values.duration}<br>
    Amount: ${values.amount}
    `,
		})
			.then((message) => alert(message))
			.catch((error) => console.error("Failed to send email:", error));
	};


	useEffect(() => {
		// Create script element
		const script = document.createElement("script");
		script.src = "https://smtpjs.com/v3/smtp.js";
		script.async = true;

		// Append the script to the body
		document.body.appendChild(script);

		// Cleanup function to remove the script when the component unmounts
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<Paper
			elevation={1}
			sx={{
				p: 1,
				position: "relative",
				flex: 1,
				maxWidth: { xs: "100%", sm: "50%" },
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
				<Image unoptimized={true} priority src="/india_only.png" width={142} height={84} alt="india" />
			</Stack>

			<Stack p={2.5} mt={5}>
				<Typography variant="h5">Donation Details</Typography>
				<Typography variant="h6">(Recurring)</Typography>
				<Formik
					initialValues={{
						name: "",
						email: "",
						mobile: "",
						address: "",
						pan: "",
						durationType: "",
						duration: "",
						amount: "",
					}}
					validationSchema={Yup.object().shape({
						name: Yup.string().required("Required"),
						email: Yup.string().email("Enter email").required("Required"),
						mobile: Yup.number().required("Required"),
						address: Yup.string().required("Address is Required!"),
						pan: Yup.string().required("Required")
							.matches(/^[A-Z]{5}[0-9]{4}[A-Z]$/, "Invalid PAN format"),
						durationType: Yup.string().required("Required"),
						duration: Yup.number().required("Required"),
						amount: Yup.string().required(),
					})}
					onSubmit={async (values) => {
						handleSubmit(values);
					}}
				>
					{({
						errors,
						touched,
						handleBlur,
						handleChange,
						values,
						isValid,
						dirty,
					}) => (
						<Form>
							<Stack direction={"column"} spacing={1} width={"100%"}>
								<TextField
									label="Name"
									name="name"
									variant="standard"
									value={values.name}
									error={touched.name && Boolean(errors.name)}
									helperText={touched.name && errors.name}
									onBlur={handleBlur}
									onChange={handleChange}
								/>

								<TextField
									label="Email"
									name="email"
									variant="standard"
									value={values.email}
									error={touched.email && Boolean(errors.email)}
									helperText={touched.email && errors.email}
									onBlur={handleBlur}
									onChange={handleChange}
								/>

								<TextField
									label="Mobile"
									name="mobile"
									variant="standard"
									value={values.mobile}
									error={touched.mobile && Boolean(errors.mobile)}
									helperText={touched.mobile && errors.mobile}
									onBlur={handleBlur}
									onChange={handleChange}
								/>
								<TextField
									label="Address"
									name="address"
									variant="standard"
									value={values.address}
									error={touched.address && Boolean(errors.address)}
									helperText={touched.address && errors.address}
									onBlur={handleBlur}
									onChange={handleChange}
								/>
								<TextField
									label="Pan"
									name="pan"
									variant="standard"
									value={values.pan}
									error={touched.pan && Boolean(errors.pan)}
									helperText={touched.pan && errors.pan}
									onBlur={handleBlur}
									onChange={handleChange}
								/>

								<FormControl fullWidth variant="standard">
									<InputLabel id="demo-simple-select-label">
										Duration Type
									</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={values.durationType}
										label="Age"
										name="durationType"
										onChange={handleChange}
									>
										<MenuItem value={"monthly"}>Monthly</MenuItem>
										<MenuItem value={"quarterly"}>Quarterly</MenuItem>
									</Select>
								</FormControl>

								<TextField
									label="Number of Months/Quarters"
									name="duration"
									variant="standard"
									value={values.duration}
									error={
										touched.duration && Boolean(errors.duration)
									}
									helperText={touched.duration && errors.duration}
									onBlur={handleBlur}
									onChange={handleChange}
								/>

								<TextField
									label="Recurring Donation Amount"
									name="amount"
									variant="standard"
									value={values.amount}
									error={touched.amount && Boolean(errors.amount)}
									helperText={touched.amount && errors.amount}
									onBlur={handleBlur}
									onChange={handleChange}
								/>
								<Box sx={{ width: "100%", textAlign: "center" }}>
									<CommonButton disabled={!isValid || !dirty} type="submit">
										Donate Now
									</CommonButton>
								</Box>
							</Stack>
							<Stack spacing={1} mt={3.2}>
								<Typography sx={{ textAlign: "center" }} variant="h6">
									For any further queries or support after payment, please write
									to us on accounts@ogq.org
								</Typography>

								<Typography className="underlineAfter" my={1}>
									50% Tax exemption under section 80G (Income Tax Act)
								</Typography>
								<Typography className="underlineAfter">
									Tax Exemption is not useful for foreign nationals as it may
									not be valid in their country.
								</Typography>
							</Stack>

						</Form>
					)}
				</Formik>
			</Stack>
		</Paper>
	);
};

export default DonationIndiaRecurring;
