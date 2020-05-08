import React from "react";

const ActionCall = ({ body }) => {
	return (
		<div className="row ActionCall">
			<div className="col-md-2"></div>
			<div className="col-md-2">
				<h3>{body}</h3>
				<button className="button">Do it</button>
			</div>
			<div className="col-md-2"></div>
			<div className="col-md-4 action-container">
				<img src="place.svg" alt="place" className="action-container__svg" />
			</div>
		</div>
	);
};

export default ActionCall;
