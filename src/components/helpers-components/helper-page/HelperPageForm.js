import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

const HelperPageForm = ({ handleSubmit, step, setStep }) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const onBoldClick = () => {
		setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
	};

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
				<button onClick={onBoldClick}>Bold</button>
				<Editor editorState={editorState} onChange={setEditorState} />
			</div>
			<button className="button">Create step</button>
		</form>
	);
};

export default HelperPageForm;
