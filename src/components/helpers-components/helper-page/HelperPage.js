import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { database } from "../../../firebase/firebase";
import { connect } from "react-redux";

const HelperPage = (props) => {
	const [step, setStep] = useState({});
	const [steps, setSteps] = useState([]);
	const helperId = props.match.params.helperId;

	console.log(helperId);

	const handleSubmit = (e) => {
		const userUid = props.userUid;
		e.preventDefault();
		setSteps([...steps, step]);
		setStep({});
		database
			.ref(`users/${userUid}/helpers/${helperId}`)
			.child("steps")
			.push({
				...step,
			});
	};

	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="">Step name</label>
					<input
						className="form-control"
						type="text"
						name="name"
						value={step.name}
						onChange={(e) => setStep({ ...step, name: e.target.value })}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="">Step description</label>
					<input
						className="form-control"
						type="text"
						name="description"
						value={step.description}
						onChange={(e) => setStep({ ...step, description: e.target.value })}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="">Step description</label>
					<input
						className="form-control"
						type="text"
						name="notes"
						value={step.notes}
						onChange={(e) => setStep({ ...step, notes: e.target.value })}
					/>
				</div>
				<button className="button">Create step</button>
			</form>

			{/* This should be another component */}
			{steps.length >= 1
				? steps.map((step, index) => (
						<div className="card">
							<h1>
								{step.title} #{index + 1}
							</h1>
							<p>{step.description} </p>
						</div>
				  ))
				: null}
		</div>
	);
};

const mapStateToProps = (state) => ({
	userUid: state.auth.user,
});

export default connect(mapStateToProps)(HelperPage);
