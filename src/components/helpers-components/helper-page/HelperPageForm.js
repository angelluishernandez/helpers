import React, { useState } from "react";
import EditorComponent from "./EditorComponent";

const HelperPageForm = ({ handleSubmit, step, setStep }) => {
	const [editorContent, setEditorContent] = useState("");

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
	);
};

export default HelperPageForm;
