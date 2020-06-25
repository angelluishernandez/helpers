import React from "react";

const ActionCall = ({ body }) => {
	return (
		<div className="row ActionCall">
			<div className="col-md-2 ActionCall__column">
				<div>
					<h3>{body}</h3>
					<button className="button">Do it</button>
				</div>
			</div>
			<div className="col-md-2  ActionCall__column"></div>
			<div className="col-md-4 action-container  ActionCall__column">
				<img src="place.svg" alt="place" className="action-container__svg" />
			</div>
		</div>
	);
};

export default ActionCall;
