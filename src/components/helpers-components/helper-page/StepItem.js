import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import { useState } from "react";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";

import EditorContent from "./EditorContent";
import { removeStep } from "../../../redux/actions/steps.actions";
import { connect } from "react-redux";

const ExpansionPanel = withStyles({
	root: {
		border: "1px solid rgba(0, 0, 0, .125)",
		boxShadow: "none",
		"&:hover": {
			cursor: "pointer",
			color: "#f37d7d",
		},
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
		"&$hover": {},
	},
	expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiExpansionPanelDetails);

const StepItems = ({ steps, removeStep }) => {
	const [expanded, setExpanded] = useState("");

	const handleChange = (key) => (event, newExpanded) => {
		setExpanded(newExpanded ? key : false);
	};

	const deleteItem = (stepId) => {
		removeStep(stepId);
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
						<Grid item xs={8}>
							<Typography>{step.name}</Typography>{" "}
						</Grid>
						<Grid item xs={4}>
							<DeleteIcon onClick={() => deleteItem(step.id)} />
						</Grid>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<EditorContent content={step.description} />
					</ExpansionPanelDetails>
				</ExpansionPanel>
			))}
		</>
	);
};

const mapDispatchToProps = (dispatch) => ({
	removeStep: (stepId) => dispatch(removeStep(stepId)),
});

export default connect(undefined, mapDispatchToProps)(StepItems);
