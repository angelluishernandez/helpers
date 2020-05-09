import React from "react";
import {
	Divider,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AssignmentTurnedInSharpIcon from "@material-ui/icons/AssignmentTurnedInSharp";

const SideBarItemsList = () => {
	const useStyles = makeStyles((theme) => ({
		toolbar: theme.mixins.toolbar,
		title: {
			fontWeight: "800",
		},
	}));

	const classes = useStyles();

	return (
		<div className="SideBarItemsList">
			<div className={classes.toolbar} />
			<Divider />
			<List>
				<ListItem>
					<ListItemIcon>
						<AssignmentTurnedInSharpIcon />
					</ListItemIcon>
					<ListItemText primary={"Add tasks"} className={classes.title} />
				</ListItem>
				<List>
					<ListItem>
						<ListItemText primary={"Some Task"} />
					</ListItem>
				</List>
			</List>
			<Divider />
			<List>
				<ListItem>
					<ListItemText primary={"Hello"} />
				</ListItem>
			</List>
			<Divider />
		</div>
	);
};

export default SideBarItemsList;
