'use client'

import Banner from "@/components/banner/banner";
import DescriptionCard from "@/components/cards/description/description-card";
import { Box, Container, List, ListItem, Stack } from "@mui/material";
import * as Styles from "@/components/common/header.styles";
import { usePathname } from "next/navigation";

const Team = () => {

	const pathname = usePathname();
	const isActive = (paths: string[]): boolean =>
		paths.some((origPath) => pathname === '/team/' + origPath)



	return (
		<Box>
			<Banner image='test.jpg' text='Team OGQ' />

			<Container>


				<Stack direction={'row'} flexWrap={'wrap'} gap={2} justifyContent={"flex-start"}>
					<DescriptionCard />
					<DescriptionCard />
					<DescriptionCard />
					<DescriptionCard />
					<DescriptionCard />
					<DescriptionCard />
					<DescriptionCard />
				</Stack>
			</Container>
		</Box>
	)
}

export default Team;