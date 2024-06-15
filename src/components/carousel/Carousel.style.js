
import { default as Link } from "next/link";

import { styled } from "@mui/material/styles";

export const StyledButtonLink = styled(Link)(({ theme }) => ({
	textDecoration: "none",
	color: "var(--white)",
	boxSizing: "border-box",
	backgroundColor: theme.palette.primary.main,
	outline: `1px solid ${theme.palette.primary.main}`,
	display: "flex",
	alignItems: "center",
	padding: "1rem 3rem",
	marginRight: "1rem",
	maxHeight: "3.1rem",
	fontSize: "1rem",
	borderRadius: "8px",
	"&:hover": {
		background: 'none',
		color: theme.palette.primary.main,
		backdropFilter: 'blur(4px)'
	},
	[theme.breakpoints.down('md')]: {
		fontSize: "0.7rem",
		padding: "0.2rem 0.5rem",
		maxHeight: "3rem",
		marginRight: "0.5rem",
	},
})); 	