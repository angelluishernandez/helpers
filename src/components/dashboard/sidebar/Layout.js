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

	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<NavbarComponent
				handleDrawerOpen={handleDrawerOpen}
				open={open}
				setOpen={setOpen}
				handleDrawerClose={handleDrawerClose}
			/>
			<SidebarComponent
				open={open}
				handleDrawerOpen={handleDrawerOpen}
				handleDrawerClose={handleDrawerClose}
			/>
		</div>
	);
};

export default Layout;
