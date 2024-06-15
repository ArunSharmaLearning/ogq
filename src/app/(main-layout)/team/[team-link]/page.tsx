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
				<List sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', maxWidth: 'sm', alignItems: 'center', margin: 'auto' }}>
					<ListItem>
						<Styles.Link href="link1" className={`parent-link justify-content-center ${isActive(['link1']) && 'active'}`}>
							Link 1
						</Styles.Link>
					</ListItem>

					<ListItem>
						<Styles.Link href="link2" className={`parent-link justify-content-center ${isActive(['link2']) && 'active'}`}>
							Link 2
						</Styles.Link>
					</ListItem>

					<ListItem>Link 3</ListItem>

					<ListItem>Link 4</ListItem>

					<ListItem>Link 5</ListItem>
				</List>

				<Stack direction={'row'} flexWrap={'wrap'} justifyContent={"space-between"}>
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