import CoachesLayout from "@/layouts/coaches";


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<CoachesLayout>
				{children}
			</CoachesLayout>
		</>
	)
}