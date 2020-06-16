import React from "react";

const TextInputs = ({ setDescription, setTitle, title, description }) => {
	return (
		<React.Fragment>
			<div className="form-group">
				<label htmlFor="">Title</label>
				<input
					type="text"
					className="form-control"
					value={title}
					placeholder="title"
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="">Description</label>
				<input
					type="text"
					className="form-control"
					value={description}
					placeholder="title"
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
		</React.Fragment>
	);
};

export default TextInputs;
