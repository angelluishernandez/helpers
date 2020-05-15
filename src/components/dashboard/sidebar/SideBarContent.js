import React from "react";
import {
	Divider,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Collapse,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import AssignmentTurnedInSharpIcon from "@material-ui/icons/AssignmentTurnedInSharp";
import SideBarItems from "./SideBarItems";
import { useState } from "react";

const SideBarContent = () => {
	const useStyles = makeStyles((theme) => ({
		toolbar: theme.mixins.toolbar,
		title: {
			fontWeight: "800",
		},
	}));

	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const classes = useStyles();

	return (
		<div className="SideBarContent">
			<div className={classes.toolbar} />
			<Divider />
			<List>
				<ListItem button onClick={handleClick}>
					<ListItemIcon>
						<AssignmentTurnedInSharpIcon />
					</ListItemIcon>
					<ListItemText primary={"Your helpers"} className={classes.title} />
					{open ? <ExpandLess /> : <ExpandMore />}{" "}
				</ListItem>

				<Collapse in={open} timeout="auto" unmountOnExit>
					<SideBarItems />
				</Collapse>
			</List>
			<Divider />
		</div>
	);
};

export default SideBarContent;
