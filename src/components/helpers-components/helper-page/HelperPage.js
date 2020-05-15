import React, { useState, useEffect } from "react";
import { database } from "../../../firebase/firebase";
import { connect } from "react-redux";
import { fetchSteps, addStep } from "../../../redux/actions/steps.actions";
import StepItems from "./StepItem";
import HelperPageForm from "./HelperPageForm";

const HelperPage = ({ match, addStep, fetchSteps, helpers, steps }) => {
	const [step, setStep] = useState({});

	const helperId = match.params.helperId;

	const handleSubmit = (e) => {
		e.preventDefault();
		addStep(step, helperId);
	};

	useEffect(() => {
		console.log("Is rerendering?");
		fetchSteps(helperId);
	}, [helperId]);

	const formProps = { handleSubmit, step, setStep };
	console.log(helpers);
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<HelperPageForm {...formProps} />
					{steps.length !== 0 ? <StepItems steps={steps} /> : <h1>Loading</h1>}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	userUid: state.auth.user,
	steps: state.steps,
	helpers: state.helpers,
});

const mapDispatchToProps = (dispatch) => ({
	fetchSteps: (helperId) => dispatch(fetchSteps(helperId)),
	addStep: (step, helperId) => dispatch(addStep(step, helperId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HelperPage);
