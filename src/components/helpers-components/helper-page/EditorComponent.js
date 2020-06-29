import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const TINY_API_KEY = process.env.TINY_API_KEY;

const EditorComponent = ({ setStep, step, editorContent }) => {
	const handleEditorChange = (content, editor) => {
		setStep({ ...step, description: content });
		console.log("This is the step on change", step.description);
	};

	return (
		<Editor
			apiKey={TINY_API_KEY}
			init={{
				height: 300,
				menubar: "tools",
				codesample_languages: [
					{ text: "HTML/XML", value: "markup" },
					{ text: "JavaScript", value: "javascript" },
					{ text: "CSS", value: "css" },
				],
				// valid_styles: "*",
				// valid_elements: "*",
				valid_children: "*",
				plugins: [
					"advlist autolink lists link image charmap print preview anchor",
					"searchreplace visualblocks code fullscreen",
					"insertdatetime media table paste code help wordcount media emoticons",
				],
				toolbar:
					"| formatselect | bold italic backcolor | aligncenter alignright alignjustify |  bullist numlist outdent indent | media | code | emoticons",
			}}
			onEditorChange={handleEditorChange}
			textareaName="description"
		/>
	);
};

export default EditorComponent;
