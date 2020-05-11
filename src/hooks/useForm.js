import { useState } from "react";

const useForm = (callback) => {
	const [values, setValues] = useState({});

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		callback();
	};

	const handleChange = (event) => {
		console.log(values);
		setValues((values) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	return {
		handleChange,
		handleSubmit,
		values,
	};
};

export default useForm;
