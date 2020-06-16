import React from "react";
import { firebase } from "../../../firebase/firebase";
import clsx from "clsx";
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";
import {
	Typography,
	AppBar,
	Toolbar,
	IconButton,
	makeStyles,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const NavbarComponent = ({
	handleDrawerOpen,

	mobileOpen,
	setMobileOpen,
	open,
}) => {
	const doSignOut = () => firebase.auth().signOut();

	const useStyles = makeStyles((theme) => ({
		grow: {
			flexGrow: 1,
		},
		appBar: {
			transition: theme.transitions.create(["margin", "width"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			backgroundColor: "#ee5a5a",
		},
		toolBar: {
			display: "flex",
			justifyContent: "space-between",
		},

		menuButton: {
			// marginRight: theme.spacing(2),
		},
		search: {},
	}));

	const classes = useStyles();

	return (
		<AppBar
			position="relative"
			className={clsx(classes.appBar, {
				[classes.appBarShift]: open,
			})}
		>
			<Toolbar className={classes.toolBar}>
				<div>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerOpen}
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<Menu />
					</IconButton>
				</div>
				<div>
					<Typography variant="h6" noWrap className="mr-2">
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
