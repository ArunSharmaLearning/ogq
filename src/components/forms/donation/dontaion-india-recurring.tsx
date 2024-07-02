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
	InputLabel,
	List,
	ListItem,
	MenuItem,
	Paper,
	Radio,
	RadioGroup,
	Select,
	Stack,
	Tab,
	Tabs,
	TextField,
	Typography,
	duration,
} from "@mui/material";
import { useState } from "react";
import * as Yup from "yup";
import CommonButton from "@/components/button/common/common-button";

const DonationIndiaRecurring = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const handleSubmit = (values: any) => {

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
			sx={{ p: 1, position: "relative", flex: 1, maxWidth: { xs: "100%", sm: "50%" } }}
		>
			<Stack
				position={"absolute"}
				sx={{
					transform: "translate(-50%, -50%)",
					left: "50%",
					top: 15,
				}}
			>
				<Image src="/india_only.png" width={142} height={84} alt="india" />
			</Stack>

			<Stack p={2.5} mt={5}>
				<Typography variant="h5">Dontaion Details</Typography>
				<Typography variant="h6">(Recurring)</Typography>
				<Formik
					initialValues={{
						name: "",
						email: "",
						mobile: "",
						address: "",
						pan: "",
						duration: "",
						durationMonths: "",
						amount: "",
					}}
					validationSchema={Yup.object().shape({
						name: Yup.string().required("Required"),
						email: Yup.string().email("Enter email").required("Required"),
						mobile: Yup.number().required("Required"),
						address: Yup.string().required("Address is Required!"),
						pan: Yup.string().required("Required"),
						duration: Yup.string().required("Required"),
						durationMonths: Yup.number().required("Required"),
						amount: Yup.string().required(),
					})}
					onSubmit={async (values) => {
						handleSubmit(values);
					}}
				>
					{({ errors, touched, handleBlur, handleChange, values }) => (
						<Form>
							<Stack direction={"column"} spacing={1} width={'100%'}>
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
										Duration
									</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={values.duration}
										label="Age"
										onChange={handleChange}
									>
										<MenuItem value={"monthly"}>Monthly</MenuItem>
										<MenuItem value={"quarterly"}>Quarterly</MenuItem>
									</Select>
								</FormControl>

								<TextField
									label="Number of Months/Quarters"
									name="Number of Months/Quarters"
									variant="standard"
									value={values.durationMonths}
									error={
										touched.durationMonths && Boolean(errors.durationMonths)
									}
									helperText={touched.durationMonths && errors.durationMonths}
									onBlur={handleBlur}
									onChange={handleChange}
								/>

								<TextField
									label="Recurring Donation Amount"
									name="Recurring Donation Amount"
									variant="standard"
									value={values.amount}
									error={touched.amount && Boolean(errors.amount)}
									helperText={touched.amount && errors.amount}
									onBlur={handleBlur}
									onChange={handleChange}
								/>
								<Box sx={{ width: '100%', textAlign: 'center' }}>
									<CommonButton type="submit">
										Donate Now
									</CommonButton>
								</Box>


							</Stack>
							<Stack spacing={1} mt={3.2}>
								<Typography sx={{ textAlign: "center" }} variant="h6">
									For any further queries or support after payment, please
									write to us on accounts@ogq.org
								</Typography>


								<Typography className="underlineAfter" my={1}>
									50% Tax exemption under section 80G (Income Tax Act)
								</Typography>
								<Typography className="underlineAfter">
									Tax Exemption is not useful for foreign nationals as it
									may not be valid in their country.
								</Typography>
							</Stack>
							{Object.keys(errors).length > 0 && (
								<ul>
									{/* Map through the keys and display corresponding error messages */}
									{Object.entries(errors).map(([key, message]) => (
										<li key={key}>
											<strong>{key}:</strong> {message}
										</li>
									))}
								</ul>
							)}
						</Form>
					)}
				</Formik>
			</Stack>
		</Paper>
	);
};

export default DonationIndiaRecurring;
