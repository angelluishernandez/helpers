import React from "react";
import TextEditorComponent from "../../forms/TextEditorComponent";

const CreateHelperItem = ({
	currentStep,
	handleChange,
	values,
	handleEditorChange,
}) => {
	return (
		<>
			{currentStep <= 1 && (
				<div>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							placeholder="Helper title"
							className="form-control"
							onChange={handleChange}
							value={values.name}
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
				</div>
			)}

			<div className="form-group">
				<TextEditorComponent
					handleEditorChange={handleEditorChange}
					value={values.editor}
				/>
			</div>
		</>
	);
};

export default CreateHelperItem;
