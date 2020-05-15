import React, { useEffect } from "react";
import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	Avatar,
	IconButton,
	Typography,
	makeStyles,
	withStyles,
} from "@material-ui/core";
import ClassIcon from "@material-ui/icons/Class";
import { Favorite, Share, ExpandMore, MoreVert } from "@material-ui/icons";
import ExpandLess from "@material-ui/icons/ExpandLess";
import { useState } from "react";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

const ExpansionPanel = withStyles({
	root: {
		border: "1px solid rgba(0, 0, 0, .125)",
		boxShadow: "none",
		"&:not(:last-child)": {
			borderBottom: 0,
		},
		"&:before": {
			display: "none",
		},
		"&$expanded": {
			margin: "auto",
		},
	},
	expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
	root: {
		backgroundColor: "rgba(0, 0, 0, .03)",
		borderBottom: "1px solid rgba(0, 0, 0, .125)",
		marginBottom: -1,
		minHeight: 56,
		"&$expanded": {
			minHeight: 56,
		},
	},
	content: {
		"&$expanded": {
			margin: "12px 0",
		},
	},
	expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiExpansionPanelDetails);

const StepItems = ({ steps }) => {
	const [expanded, setExpanded] = useState("");

	const handleChange = (key) => (event, newExpanded) => {
		setExpanded(newExpanded ? key : false);
	};

	return (
		<>
			{steps.map((step, index) => (
				<ExpansionPanel
					square
					expanded={expanded === index}
					key={index}
					onChange={handleChange(index)}
				>
					<ExpansionPanelSummary>
						<Typography>{step.name}</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			))}
		</>
	);
};

export default StepItems;
