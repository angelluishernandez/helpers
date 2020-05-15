import React, { useState } from "react";
import { Hidden, Drawer, Divider } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SideBarContent from "./SideBarContent";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";

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
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
		background: "#f37d7d",
		height: "30vh",
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
	const container =
		window !== undefined ? () => window().document.body : undefined;

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
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "ltr" ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</div>
				<SideBarContent />
			</Drawer>
		</nav>
	);
};

export default SideBarComponent;
