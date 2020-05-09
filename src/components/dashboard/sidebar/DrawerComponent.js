import React, { useState } from "react";
import { Hidden, Drawer } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SideBarItemsList from "./SideBarItems";

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

const DrawerComponent = (props) => {
	const classes = useStyles();

	const [mobileOpen, setMobileOpen] = useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const { window } = props;
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
					<SideBarItemsList />
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
					<SideBarItemsList />
				</Drawer>
			</Hidden>
		</nav>
	);
};

export default DrawerComponent;
