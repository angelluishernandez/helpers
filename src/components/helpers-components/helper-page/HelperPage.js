import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchSteps, addStep } from "../../../redux/actions/steps.actions";
import { fetchHelpers } from "../../../redux/actions/helpers.actions";
import StepItems from "./StepItem";
import HelperPageForm from "./HelperPageForm";
import Spinner from "../../UI/Spinner";

const HelperPage = ({
	match,
	addStep,
	fetchSteps,
	helpers,
	steps,
	fetchHelpers,
	helper,
}) => {
	console.log(helper[0]);
	const [loading, setLoading] = useState(true);
	const [currentHelper, setCurrentHelper] = useState({});

	const [step, setStep] = useState({});

	const helperId = match.params.helperId;

	const handleSubmit = (e) => {
		e.preventDefault();
		addStep(step, helperId);
	};

	// Get helpers so they can be filtered

	useEffect(() => {
		fetchHelpers();
	}, []);

	// Update component with the current helper

	useEffect(() => {
		setCurrentHelper(helper[0]);
		setLoading(true);
		if (currentHelper === undefined) {
			setLoading(false);
		}
	}, [helper]);

	console.log(currentHelper, loading);
	const formProps = { handleSubmit, step, setStep };

	return (
		<div className="container">
			{!loading ? (
				<div className="row">
					<div className="col-10 mx-auto">
						<h4>{currentHelper.title}</h4>

						<HelperPageForm {...formProps} />
						{steps.length !== 0 ? <StepItems steps={steps} /> : <Spinner />}
					</div>
				</div>
			) : (
				<Spinner />
			)}
		</div>
	);
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
