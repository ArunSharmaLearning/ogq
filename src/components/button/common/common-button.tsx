'use client'
import { useRouter } from "@/hooks/use-router"
import { Button } from "@mui/material"

const CommonButton = ({ link, disabled, children, sx, type, onClick }: { link?: string, disabled?: boolean, children: any, sx?: object, type?: "submit", onClick?: any }) => {

	const router = useRouter()
	const isExternalLink = /^https?:\/\//.test(link);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (onClick) {
			// If an onClick handler is provided, call it
			onClick();
		} else if (link) {
			// If a link is provided, handle the navigation
			if (isExternalLink) {
				// Open external link in a new tab
				window.open(link, "_blank");
			} else {
				// Navigate to internal link
				router.push(link);
			}
		}
	};

	return (
		<Button disabled={disabled} type={type} variant="outlined" onClick={handleClick} sx={(theme) => ({
			marginY: 1,
			...sx,
			background: theme.palette.primary.main,
			color: theme.palette.common.black,
			'&:hover': {
				background: 'none',
				color: theme.palette.primary.main,
				backdropFilter: 'blur(4px)'
			},
			'&.Mui-disabled': {
				background: 'none'
			}
		})}>
			{children}
		</Button >
	)
}

export default CommonButton