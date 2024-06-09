'use client'
import { useRouter } from "@/hooks/use-router"
import { Button } from "@mui/material"

const CommonButton = ({ link, children, sx }: { link?: string, children: any, sx?: object }) => {

	const router = useRouter()
	return (
		<Button variant="outlined" onClick={() => link ? router.push(link) : void 0} sx={(theme) => ({
			marginY: 3,
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