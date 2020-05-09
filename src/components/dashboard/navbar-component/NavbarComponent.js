import React, { useState } from "react";
import { firebase } from "../../../firebase/firebase";
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";
import {
	Typography,
	AppBar,
	Toolbar,
	IconButton,
	makeStyles,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const NavbarComponent = ({ handleDrawerToggle, mobileOpen, setMobileOpen }) => {
	const doSignOut = () => firebase.auth().signOut();

	const drawerWidth = 240;

	const useStyles = makeStyles((theme) => ({
		grow: {
			flexGrow: 1,
		},
		appBar: {
			[theme.breakpoints.up("sm")]: {
				width: `calc(100% - ${drawerWidth}px)`,
				marginLeft: drawerWidth,
			},
			backgroundColor: "#f37d7d",
		},
		toolBar: {
			display: "flex",
			justifyContent: "space-between",
		},

		menuButton: {
			marginRight: theme.spacing(2),
			[theme.breakpoints.up("sm")]: {
				display: "none",
			},
		},
		search: {},
	}));

	const classes = useStyles();

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar className={classes.toolBar}>
				<div>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<Menu />
					</IconButton>
				</div>
				<div>
					<Typography variant="h6" noWrap>
						Helpers
					</Typography>
				</div>
				<div>
					<ExitToAppSharpIcon onClick={doSignOut} />
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default NavbarComponent;
