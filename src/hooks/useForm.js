import { useState } from "react";

const useForm = (callback) => {
	const [values, setValues] = useState({});

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		callback();
	};

	const handleChange = (event) => {
		setValues((values) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	const handleEditorChange = (content) => {
		setValues((values) => ({
			...values,
			editor: content,
		}));
	};

	return {
		handleChange,
		handleSubmit,
		values,
		handleEditorChange,
	};
};

export default useForm;
