import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const EditorComponent = ({
	setEditorContent,
	setStep,
	step,
	editorContent,
}) => {
	const handleEditorChange = (content, editor) => {
		console.log(editorContent);
		console.log(content);
		setEditorContent(content);
		setStep({ ...step, description: editorContent });
	};

	return (
		<Editor
			init={{
				height: 300,
				menubar: "tools",
				codesample_languages: [
					{ text: "HTML/XML", value: "markup" },
					{ text: "JavaScript", value: "javascript" },
					{ text: "CSS", value: "css" },
				],
				valid_styles: "*",
				valid_elements: "*",
				valid_children: "+body[style]",
				plugins: [
					"advlist autolink lists link image charmap print preview anchor",
					"searchreplace visualblocks code fullscreen",
					"insertdatetime media table paste code help wordcount media",
				],
				toolbar:
					"| formatselect | bold italic backcolor | aligncenter alignright alignjustify |  bullist numlist outdent indent | media | code",
				valid_children: "+body[style]",
			}}
			onEditorChange={handleEditorChange}
			textareaName="description"
		/>
	);
};

export default EditorComponent;
