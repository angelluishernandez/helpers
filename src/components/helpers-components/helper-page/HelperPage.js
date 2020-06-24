import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchSteps, addStep } from "../../../redux/actions/steps.actions";
import { getCurrentHelper } from "../../../redux/actions/helpers.actions";
import HelperPageForm from "./HelperPageForm";
import Spinner from "../../UI/Spinner";

const HelperPage = ({ getCurrentHelper, match, currentHelper, steps }) => {
	const helperId = match.params.helperId;

	const [loading, setLoading] = useState(true);

	const [step, setStep] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		addStep(step, helperId);
	};

	// Fetch current helpers info

	useEffect(() => {
		const getData = async () => {
			await getCurrentHelper(helperId);
			await fetchSteps(helperId);
		};
		getData().then(() => setLoading(false));
	}, [helperId]);

	console.log(helperId);

	const formProps = {
		handleSubmit,
		step,
		setStep,
		currentHelper,
		loading,
		steps,
	};

	return <HelperPageForm {...formProps} />;
};

const mapStateToProps = (state, props) => {
	console.log(state);
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
