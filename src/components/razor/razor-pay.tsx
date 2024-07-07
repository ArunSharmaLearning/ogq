'use client'
import React, { useEffect } from 'react';
import CommonButton from '../button/common/common-button';
import { useTheme } from '@mui/material';
import { RAZOR_PAY_KEY } from '@/constants/api';
// import { useTheme } from '@';

// Make sure to include Razorpay script in your index.html or dynamically load it
// <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

const RazorpayPayment = () => {
	const theme = useTheme()

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


	const handlePayment = () => {
		const options = {
			"key": RAZOR_PAY_KEY, // Enter the Key ID generated from the Dashboard
			"amount": 5000 * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
			"currency": "INR",
			"name": "Acme Corp", //your business name
			"description": "Test Transaction",
			"image": '/ogq-logo.svg',
			// "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
			// "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
			"prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
				"name": "Gaurav Kumar", //your customer's name
				"email": "gaurav.kumar@example.com",
				"contact": "9000090000" //Provide the customer's phone number for better conversion rates 
			},
			"notes": {
				"address": "Razorpay Corporate Office"
			},
			"theme": {
				"color": '#3333cc'
			}
		};

		const rzp1 = new (window as any).Razorpay(options);
		rzp1.on('payment.failed', function (response) {
			alert(`Error Code: ${response.error.code}`);
			alert(`Error Description: ${response.error.description}`);
			alert(`Error Source: ${response.error.source}`);
			alert(`Error Step: ${response.error.step}`);
			alert(`Error Reason: ${response.error.reason}`);
			alert(`Order ID: ${response.error.metadata.order_id}`);
			alert(`Payment ID: ${response.error.metadata.payment_id}`);
		});

		rzp1.open();
	};

	return (
		<CommonButton type="submit" onClick={handlePayment}>
			Donate Now
		</CommonButton>
	);
};

export default RazorpayPayment;
