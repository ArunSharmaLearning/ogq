"use client";
import Image from "next/image";
import {
	Box,
	Paper,
	Stack,
	Tab,
	Tabs,
	Typography,
	useTheme,
} from "@mui/material";
import { useState } from "react";
import CommonButton from "@/components/button/common/common-button";
import { DONATE_NOW } from "@/constants/api";
import Link from "next/link";

const DonationUsa = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const theme = useTheme()

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
				<Image priority unoptimized={true} src="/usa_only.png" width={142} height={84} alt="india" />
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
				<Image priority unoptimized={true}
					src="/donate-paypal.png"
					width={200}
					height={60}
					alt="payment gateway"
				/>

				<Box sx={{ width: '100%', textAlign: 'center' }}>
					<form
						action="https://www.paypal.com/cgi-bin/webscr"
						method="post"
						target="_blank"
					>
						<input type="hidden" name="cmd" value="_s-xclick" />
						<input type="hidden" name="hosted_button_id" value={DONATE_NOW} />
						<CommonButton type="submit">
							Donate Now
						</CommonButton>
					</form>
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
				For any queries please contact {" "}
				<Link style={{ color: theme.palette.primary.dark }} href={"mailto:neha@ogq.org"}>
					neha@ogq.org</Link>
			</Typography>
		</Paper>
	);
};

export default DonationUsa;
