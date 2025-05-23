"use client";

import { Stack, SxProps, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CountdownBox = ({ value, label }) => {
	return (
		<Stack
			direction="column"
			alignItems="center"
			sx={{
				flex: 1,
			}}
		>
			<Typography
				variant="h2"
				suppressHydrationWarning
				sx={(theme) => ({
					border: `3px solid ${theme.palette.grey[400]}`,
					textAlign: "center",
					alignContent: "center",
					width: "7rem",
					height: "7rem",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				})}
			>
				{value}
			</Typography>
			<Typography variant="h6" sx={{ marginTop: 0.4 }}>
				{label}
			</Typography>
		</Stack>
	);
};

const calculateTimeLeft = (eventDate: Date) => {
	const now = new Date();
	const event = new Date(eventDate);
	const difference = Math.abs(event.getTime() - now.getTime());

	if (difference <= 0) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	}

	const timeLeft = {
		days: Math.floor(difference / (1000 * 60 * 60 * 24))
			.toString()
			.padStart(2, "0"),
		hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
			.toString()
			.padStart(2, "0"),
		minutes: Math.floor((difference / 1000 / 60) % 60)
			.toString()
			.padStart(2, "0"),
		seconds: Math.floor((difference / 1000) % 60)
			.toString()
			.padStart(2, "0"),
	};

	return timeLeft;
};

const formatEventDate = (eventDateTime: Date) => {
	// Extract the day, month, and year
	const day = String(eventDateTime.getDate()).padStart(2, '0');
	const month = eventDateTime.toLocaleString('default', { month: 'short' }).toUpperCase(); // getMonth() is zero-based
	const year = eventDateTime.getFullYear();
	return { day, month, year }
}

const CountDown = ({
	eventDateTime,
	isEventGoingOn,
	...sx
}: {
	eventDateTime: Date;
	isEventGoingOn: boolean;
	sx?: SxProps
}) => {
	const [eventDateTimeLeft, setEventDateTimeLeft] = useState(
		calculateTimeLeft(eventDateTime)
	);
	const formattedEventDate = formatEventDate(eventDateTime);


	useEffect(() => {
		const updateCountdown = () => {
			setEventDateTimeLeft(calculateTimeLeft(eventDateTime));
		};

		const intervalId = setInterval(updateCountdown, 1000);

		return () => clearInterval(intervalId); // Cleanup interval on component unmount
	}, [eventDateTime]);

	return (
		<>
			<Stack
				justifyContent={"center"}
				margin="auto"
				alignItems={"center"}
				{...sx}
			>
				{!isEventGoingOn ? (
					<>
						<CountdownBox value={eventDateTimeLeft.days} label={"Days"} />
						<CountdownBox value={eventDateTimeLeft.hours} label={"Hours"} />
						<CountdownBox value={eventDateTimeLeft.minutes} label={"Minutes"} />
						<CountdownBox value={eventDateTimeLeft.seconds} label={"Seconds"} />
					</>
				) : (
					<>
						<CountdownBox value={formattedEventDate.day} label={"Date"} />
						<CountdownBox value={formattedEventDate.month} label={"Month"} />
						<CountdownBox value={formattedEventDate.year} label={"Year"} />
					</>
				)}
			</Stack>
		</>
	);
};

export default CountDown;
