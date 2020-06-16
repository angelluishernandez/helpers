import React from "react";
import { Drawer } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SideBarContent from "./SideBarContent";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	drawer: {
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: "flex",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "space-between",
		alignItems: "center",
		background: "#f37d7d",
		height: "10vh",
	},
	drawerButton: {
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
}));

const SideBarComponent = ({
	open,
	setOpen,
	handleDrawerOpen,
	handleDrawerClose,
	window,
}) => {
	const classes = useStyles();

	const theme = useTheme();
	return (
		<nav className={classes.drawer} aria-label="mailbox folders">
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor={"left"}
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<div className="profile-edit">
						<Link to="/profile">Edit your profile</Link>
					</div>
					<div>
						<IconButton
							onClick={handleDrawerClose}
							className={classes.drawerButton}
						>
							{theme.direction === "ltr" ? (
								<ChevronLeftIcon />
							) : (
								<ChevronRightIcon />
							)}
						</IconButton>
					</div>
				</div>
				<SideBarContent />
			</Drawer>
		</nav>
	);
};

export default SideBarComponent;
