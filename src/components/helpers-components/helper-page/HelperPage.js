import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchSteps, addStep } from "../../../redux/actions/steps.actions";
import { fetchHelpers } from "../../../redux/actions/helpers.actions";
import HelperPageForm from "./HelperPageForm";

const HelperPage = ({
	match,
	addStep,
	fetchSteps,
	helpers,
	steps,
	fetchHelpers,
	helper,
}) => {
	const [loading, setLoading] = useState(false);
	const [currentHelper, setCurrentHelper] = useState({});

	const [step, setStep] = useState({});

	const helperId = match.params.helperId;

	const handleSubmit = (e) => {
		e.preventDefault();

		addStep(step, helperId);
		setLoading(false);
	};

	// Get helpers so they can be filtered

	useEffect(() => {
		console.log(loading, "Entra 1");
		setLoading(true);
		fetchHelpers();
	}, []);

	// Update component with the current helper

	useEffect(() => {
		console.log(loading, "Entra 2");
		setCurrentHelper(helper[0]);
		// fetchSteps(helperId);

		if (currentHelper === undefined) {
			fetchSteps(helperId);
			setLoading(false);
		}
	}, [helper]);

	console.log(loading);

	const formProps = {
		handleSubmit,
		step,
		setStep,
		loading,
		currentHelper,
		steps,
	};

	return <HelperPageForm {...formProps} />;
};

const mapStateToProps = (state, props) => {
	const currentHelper = state.helpers.filter(
		(helper) => helper.id === props.match.params.helperId
	);

	return {
		userUid: state.auth.user,
		steps: state.steps,
		helpers: state.helpers,
		helper: currentHelper,
	};
};

const mapDispatchToProps = (dispatch) => ({
	fetchSteps: (helperId) => dispatch(fetchSteps(helperId)),
	addStep: (step, helperId) => dispatch(addStep(step, helperId)),
	fetchHelpers: () => dispatch(fetchHelpers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HelperPage);
