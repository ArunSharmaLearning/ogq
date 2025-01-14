'use client'
import React, { useEffect } from 'react';
import CommonButton from '../button/common/common-button';
import { RAZOR_PAY_KEY } from '@/constants/api';

const RazorpayPayment = ({ details, disabled }: { details: any, disabled: boolean }) => {

	useEffect(() => {
		// Create script element
		const script = document.createElement('script');
		script.src = "https://checkout.razorpay.com/v1/checkout.js";
		script.async = true;

		// Append the script to the body
		document.body.appendChild(script);

		// Cleanup function to remove the script when the component unmounts
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	const demoSuccessHandler = (transaction) => {
		// handle successful payment
	}

	const handlePayment = () => {
		const options = {
			"key": RAZOR_PAY_KEY, // Enter the Key ID generated from the Dashboard
			"amount": parseInt(details.donation == "other" ? details.amount : details.donation) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
			"currency": "INR",
			"name": "OGQ", //your business name
			"handler": demoSuccessHandler,
			"image": '/ogq-logo.svg',
			"prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
				"name": details.name, //your customer's name
				"email": details.email,
				"contact": details.mobile, //Provide the customer's phone number for better conversion rates 
				"pan": details.pan,
				"address": details.address
			},
			"theme": {
				"color": '#3333cc'
			}
		};

		const rzp1 = new (window as any).Razorpay(options);
		rzp1.open();
	};

	return (
		<CommonButton disabled={disabled} type="submit" onClick={handlePayment}>
			Donate Now
		</CommonButton>
	);
};

export default RazorpayPayment;
