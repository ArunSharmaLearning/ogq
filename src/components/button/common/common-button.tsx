'use client'
import { useRouter } from "@/hooks/use-router"
import { Button } from "@mui/material"

const CommonButton = ({ link, children, sx, type }: { link?: string, children: any, sx?: object, type?: "submit" }) => {

	const router = useRouter()
	const isExternalLink = /^https?:\/\//.test(link);



	return (
		<Button type={type} variant="outlined" onClick={() => !isExternalLink ? router.push(link) : window.open(link, "_blank")} sx={(theme) => ({
			marginY: 1,
			...sx,
			background: theme.palette.primary.main,
			color: theme.palette.common.black,
			'&:hover': {
				background: 'none',
				color: theme.palette.primary.main,
				backdropFilter: 'blur(4px)'
			},


		})}>
			{children}
		</Button >
	)
}

export default CommonButton