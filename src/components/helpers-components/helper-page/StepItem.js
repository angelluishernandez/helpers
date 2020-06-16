import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import { useState } from "react";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import EditorContent from "./EditorContent";

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
						<EditorContent content={step.description} />
					</ExpansionPanelDetails>
				</ExpansionPanel>
			))}
		</>
	);
};

export default StepItems;
