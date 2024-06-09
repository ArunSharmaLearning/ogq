import Banner from "@/components/banner/banner";
import DescriptionCard from "@/components/cards/description/description-card";
import { Box, Container, List, ListItem, Stack } from "@mui/material";

const Team = () => {
	return (
		<Box>
			<Banner image='test.jpg' text='Team OGQ' />

			<Container>
				<List sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', maxWidth: 'sm', alignItems: 'center', margin: 'auto' }}>
					<ListItem>Link 1</ListItem>

					<ListItem>Link 2</ListItem>

					<ListItem>Link 3</ListItem>

					<ListItem>Link 4</ListItem>

					<ListItem>Link 5</ListItem>
				</List>

				<Stack direction={'row'} flexWrap={'wrap'}>
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