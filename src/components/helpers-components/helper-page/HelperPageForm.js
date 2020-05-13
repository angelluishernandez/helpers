import React from "react";

const HelperPageForm = ({ handleSubmit, step, setStep }) => {
	return (
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
	);
};

export default HelperPageForm;
