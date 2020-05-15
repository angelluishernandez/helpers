import React, { useState } from "react";
import { Hidden, Drawer } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SideBarContent from "./SideBarContent";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	drawerPaper: {
		width: drawerWidth,
	},
}));

const SideBarComponent = ({
	setMobileOpen,
	mobileOpen,
	handleDrawerToggle,
	window,
}) => {
	const classes = useStyles();

	const container =
		window !== undefined ? () => window().document.body : undefined;

	const theme = useTheme();
	return (
		<nav className={classes.drawer} aria-label="mailbox folders">
			<Hidden smUp implementation="css">
				<Drawer
					container={container}
					variant="temporary"
					anchor={theme.direction === "rtl" ? "right" : "left"}
					open={mobileOpen}
					onClose={handleDrawerToggle}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true,
					}}
				>
					<SideBarContent />
				</Drawer>
			</Hidden>
			<Hidden xsDown implementation="css">
				<Drawer
					classes={{
						paper: classes.drawerPaper,
					}}
					variant="permanent"
					open
				>
					<SideBarContent />
				</Drawer>
			</Hidden>
		</nav>
	);
};

export default SideBarComponent;
