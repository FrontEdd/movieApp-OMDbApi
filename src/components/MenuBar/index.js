import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

const MenuBar = ({ text, buttonClick, buttonIcon: ButtonIcon }) => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					{text}
				</Typography>
				<IconButton
					variant="outlined"
					color="warning"
					onClick={buttonClick}
				>
					<ButtonIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default MenuBar;