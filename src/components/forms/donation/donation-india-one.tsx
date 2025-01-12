"use client";
import { Form, Formik } from "formik";
import Image from "next/image";
import {
	Box,
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
import Razor from "@/components/razor";

const DonationIndiaOne = () => {
	const [value, setValue] = useState(0);

	const handleChange = (_: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
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
			sx={{ p: 1, position: "relative", flex: 1 }}
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
			<Tabs sx={{ mt: 5 }} value={value} onChange={handleChange}>
				<Tab label="Credit / Debit / Netbanking / Wallet" {...a11yProps(0)} />
				<Tab label="Cheque" {...a11yProps(1)} />
			</Tabs>

			<Stack
				p={2.5}
				role="tabpanel"
				hidden={value !== 0}
				id={`simple-tabpanel-${0}`}
				aria-labelledby={`simple-tab-${0}`}
			>
				<Typography variant="h5">Dontaion Details</Typography>
				<Typography variant="h6">(One Time)</Typography>
				<Formik
					initialValues={{
						name: "",
						email: "",
						mobile: "",
						address: "",
						pan: "",
						donation: "",
						amount: "",
					}}
					validationSchema={Yup.object().shape({
						name: Yup.string().required("Required"),
						email: Yup.string().email("Enter email").required("Required"),
						mobile: Yup.number().required("Required"),
						address: Yup.string().required("Address is Required!"),
						pan: Yup.string().required("Required"),
						donation: Yup.string().required("Required"),
						amount: Yup.string().optional(),
					})}
					onSubmit={async (values) => {
					}}
				>
					{({ errors, touched, handleBlur, handleChange, values, isValid, dirty }) => (
						<Form>
							<Stack direction={"column"} spacing={1}>
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

								<FormControl
									component="fieldset"
									error={touched.donation && Boolean(errors.donation)}
								>
									<FormLabel id="demo-radio-buttons-group-label">
										Donation Amount
									</FormLabel>
									<RadioGroup
										onBlur={handleBlur}
										value={values.donation}
										onChange={handleChange}
										aria-labelledby="demo-radio-buttons-group-label"
										defaultValue="female"
										name="donation"
										sx={{ flexDirection: "row", alignItems: 'center' }}
									>
										<FormControlLabel
											sx={{ p: 0 }}
											value="50000"
											control={<Radio />}
											label="50,000"
										/>
										<FormControlLabel
											value="100000"
											control={<Radio />}
											label="100,000"
										/>
										<FormControlLabel
											value="200000"
											control={<Radio />}
											label="200,000"
										/>
										<FormControlLabel
											value="500000"
											control={<Radio />}
											label="500,000"
										/>
										<FormControlLabel
											value="other"
											control={<Radio />}
											label="Other"
										/>
									</RadioGroup>

									{values.donation == "other" && (
										<TextField
											label="Amount"
											name="amount"
											value={values.amount}
											variant="standard"
											error={touched.amount && Boolean(errors.amount)}
											helperText={touched.amount && errors.amount}
											onBlur={handleBlur}
											onChange={handleChange}
										/>
									)}
								</FormControl>

								<Box sx={{ width: "100%", textAlign: "center" }}>
									<Razor disabled={!isValid || !dirty} details={values} />
								</Box>
							</Stack>

						</Form>
					)}
				</Formik>
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
					In case you want to send a cheque to OGQ; the crossed cheque should be
					made in the name of &apos;Foundation for Promotion of Sports and
					Games&apos;. You may also use the below details:
				</Typography>
				<Typography variant="h5" sx={(theme) => ({ color: theme.palette.primary.main })}>CHEQUE</Typography>
				<Typography variant="h6">Please courier the cheque to:
				</Typography>
				<Typography>
					Yatin Bhatkar,
					Olympic Gold Quest, 401, 5th floor, Anand Building,
					Ambedkar road, Bandra West, Mumbai - 400050</Typography>
			</Stack>

			<Stack direction={"column"} p={2.5} pt={0}>
				<Typography sx={{ textAlign: "center", my: 1 }} variant="h6">
					For any further queries or support after payment, please write to us
					on accounts@ogq.org
				</Typography>

				<Typography className="underlineAfter" mb={1}>
					50% Tax exemption under section 80G (Income Tax Act)
				</Typography>
				<Typography className="underlineAfter">
					Tax Exemption is not useful for foreign nationals as it may not be
					valid in their country.
				</Typography>
			</Stack>
		</Paper >
	);
};

export default DonationIndiaOne;
