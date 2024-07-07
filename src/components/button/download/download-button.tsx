import Iconify from "@/components/iconify";
import { Button, Tooltip } from "@mui/material"


const DownloadButton = ({ text, file }: { text: string, file: string }) => {
	const truncateText = ({ text, maxLength = 20 }: { text: string; maxLength?: number }): string => {
		return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
	};


	const truncatedText = truncateText({ text, maxLength: 26 });


	return (
		<Tooltip title={text}>
			<Button sx={{
				width: '20rem', mr: '1rem', mb: '1rem',
				paddingLeft: 5,
				'&::before': {
					position: 'absolute',
					content: '""',
					width: 10,
					height: "100%",
					background: '#060363',
					left: 17,
				}
			}} variant="contained"
				target="_blank"
				href={'https://ogqbackend.pythonanywhere.com' + file}
				endIcon={< Iconify width={22} icon={'line-md:download-loop'} ml={1} />}
			>
				{truncatedText}
			</Button >
		</Tooltip>
	)
}

export default DownloadButton;