import React, { useState } from "react";

//Material UI Components

import { makeStyles } from "@material-ui/core/styles";
import NavbarComponent from "./NavbarComponent";
import SidebarComponent from "./SideBarComponent";

const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
	},
}));

const Layout = (props) => {
	const classes = useStyles();

	const [mobileOpen, setMobileOpen] = useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<div className={classes.root}>
			<NavbarComponent
				handleDrawerToggle={handleDrawerToggle}
				mobileOpen={mobileOpen}
				setMobileOpen={setMobileOpen}
			/>
			<SidebarComponent
				setMobileOpen={setMobileOpen}
				mobileOpen={mobileOpen}
				handleDrawerToggle={handleDrawerToggle}
			/>
		</div>
	);
};

export default Layout;
