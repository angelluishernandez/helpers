import React, { useState } from "react";
import CreateHelperItem from "./CreateHelperStep";
import useForm from "../../../hooks/useForm";

const CreateHelperForm = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const { handleChange, handleSubmit, values } = useForm();

	return (
		<React.Fragment>
			<h3>Create your new helper</h3>
			<p>This is the current step: {currentStep}</p>
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-12">
						<form onSubmit={handleSubmit} className="CreateHelperItem__form">
							<CreateHelperItem handleChange={handleChange} values={values} />
						</form>

						<div className="create-controls">
							<button className="button">Previous</button>
							<button className="button">Next</button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default CreateHelperForm;
