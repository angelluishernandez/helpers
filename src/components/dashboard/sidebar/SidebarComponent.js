import React, { useState } from "react";

//Material UI Components

import { makeStyles } from "@material-ui/core/styles";
import NavbarComponent from "../navbar-component/NavbarComponent";
import DrawerComponent from "./DrawerComponent";

const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
	},
}));

const SideBar = (props) => {
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
			<DrawerComponent />
		</div>
	);
};

export default SideBar;
