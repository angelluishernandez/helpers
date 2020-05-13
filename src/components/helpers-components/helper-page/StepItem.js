import React from "react";

const StepItems = ({ steps }) => {
	return (
		<div className="col-md-12">
			{steps.map((step, index) => {
				return (
					<div className="card" key={index}>
						<h1>
							{step.name} #{index + 1}
						</h1>
						<p>{step.description} </p>
					</div>
				);
			})}
		</div>
	);
};

export default StepItems;
