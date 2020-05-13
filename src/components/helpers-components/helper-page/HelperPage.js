import React, { useState, useEffect } from "react";
import { database } from "../../../firebase/firebase";
import { connect } from "react-redux";
import { fetchSteps, addStep } from "../../../redux/actions/steps.actions";
import StepItems from "./StepItem";
import HelperPageForm from "./HelperPageForm";

const HelperPage = (props) => {
	const [step, setStep] = useState({});

	const helperId = props.match.params.helperId;

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addStep(step, helperId);
	};

	useEffect(() => {
		props.fetchSteps(helperId);
	}, []);

	const formProps = { handleSubmit, step, setStep };

	return (
		<div>
			<HelperPageForm {...formProps} />

			{/* This should be another component */}

			{/* Add helper to global store and then pass it to the parent component */}

			{props.steps.length !== 0 ? (
				<StepItems steps={props.steps} />
			) : (
				<h1>Loading</h1>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	userUid: state.auth.user,
	steps: state.steps,
});

const mapDispatchToProps = (dispatch) => ({
	fetchSteps: (helperId) => dispatch(fetchSteps(helperId)),
	addStep: (step, helperId) => dispatch(addStep(step, helperId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HelperPage);
