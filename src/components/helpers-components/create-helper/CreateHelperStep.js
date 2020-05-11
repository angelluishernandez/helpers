import React from "react";
import TextEditorComponent from "../../forms/TextEditorComponent";

const CreateHelperItem = ({ currentStep, handleChange, values }) => {
	return (
		<>
			<div className="form-group">
				<label htmlFor="title">Title</label>
				<input
					type="text"
					name="title"
					placeholder="Helper title"
					className="form-control"
					onChange={handleChange}
					value={values.title}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="description">Description</label>
				<textarea
					type="text"
					name="description"
					placeholder="Helper description"
					className="form-control"
					onChange={handleChange}
					value={values.description}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="notes">Notes</label>
				<textarea
					type="text"
					name="notes"
					placeholder="Helper notes"
					className="form-control"
					onChange={handleChange}
					value={values.notes}
				/>
			</div>
			<div className="form-group">
				<TextEditorComponent
					handleChange={handleChange}
					value={values.editor}
				/>
			</div>
		</>
	);
};

export default CreateHelperItem;
