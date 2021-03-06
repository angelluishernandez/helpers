import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchSteps, addStep } from "../../../redux/actions/steps.actions";
import {
	getCurrentHelper,
	fetchHelpers,
} from "../../../redux/actions/helpers.actions";
import HelperPageForm from "./HelperPageForm";

const HelperPage = ({
	getCurrentHelper,
	match,
	currentHelper,
	steps,
	fetchSteps,
	addStep,
}) => {
	const helperId = match.params.helperId;

	const [loading, setLoading] = useState(true);

	const [step, setStep] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		addStep(step, helperId);
		fetchSteps(helperId);
	};

	// Fetch current helpers info

	const fetchData = async () => {
		await getCurrentHelper(helperId);
		await fetchHelpers(helperId);
		await fetchSteps(helperId);
	};

	// Use effect on first load

	useEffect(() => {
		fetchData().then(() => setLoading(false));
		// eslint-disable-next-line
	}, []);

	const formProps = {
		handleSubmit,
		step,
		setStep,
		currentHelper,
		loading,
		steps,
		helperId,
	};

	return <HelperPageForm {...formProps} />;
};

const mapStateToProps = (state, props) => {
	return {
		steps: state.steps,
		currentHelper: state.currentHelper,
	};
};

const mapDispatchToProps = (dispatch) => ({
	getCurrentHelper: (helperId) => dispatch(getCurrentHelper(helperId)),
	fetchSteps: (helperId) => dispatch(fetchSteps(helperId)),
	addStep: (step, helperId) => dispatch(addStep(step, helperId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HelperPage);
