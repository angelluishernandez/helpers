import React from "react";

const StepItems = ({ steps }) => {
	const createHtml = (string) => ({
		__html: string,
	});

	return (
		<div className="col-md-12">
			{steps.map((step, index) => {
				return (
					<div className="card" key={index}>
						<h1>
							{step.name} #{index + 1}
						</h1>
						{/* <p dangerouslySetInnerHTML={createHtml(step.description)}> </p> */}
					</div>
				);
			})}
		</div>
	);
};

export default StepItems;
