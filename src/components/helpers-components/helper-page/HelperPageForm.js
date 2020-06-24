import React, { useState } from "react";
import EditorComponent from "./EditorComponent";
import Spinner from "../../UI/Spinner";
import StepItems from "./StepItem";

const HelperPageForm = ({
	handleSubmit,
	step,
	setStep,
	currentHelper,
	loading,
	steps,
}) => {
	const [editorContent, setEditorContent] = useState("");

	return !loading ? (
		<div className="container">
			<div className="row">
				<div className="col-10 mx-auto">
					<h4>{currentHelper.title}</h4>
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
							<label htmlFor="">Step notes</label>
							<input
								className="form-control"
								type="text"
								name="notes"
								value={step.notes}
								onChange={(e) => setStep({ ...step, notes: e.target.value })}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="description">Description</label>

							<EditorComponent
								setEditorContent={setEditorContent}
								editorContent={editorContent}
								step={step}
								setStep={setStep}
							/>
						</div>
						<button className="button">Create step</button>
					</form>

					{/* Add a button to display the steps  */}

					{steps.length !== 0 ? <StepItems steps={steps} /> : <Spinner />}
				</div>
			</div>
		</div>
	) : (
		<Spinner />
	);
};

export default HelperPageForm;
