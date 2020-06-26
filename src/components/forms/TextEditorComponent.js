import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const TextEditorComponent = ({ handleEditorChange }) => {
	const [editorContent, setEditorContent] = useState("");

	const onEditorChange = (content, editor) => {
		setEditorContent(content);
		handleEditorChange(editorContent);
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

				plugins: [
					"advlist autolink lists link image charmap print preview anchor",
					"searchreplace visualblocks code fullscreen",
					"insertdatetime media table paste code help wordcount media",
				],
				toolbar:
					"| formatselect | bold italic backcolor | aligncenter alignright alignjustify |  bullist numlist outdent indent | media | code",
				// valid_children: "+body[style]",
			}}
			onEditorChange={handleEditorChange}
			textareaName="description"
		/>
	);
};

export default TextEditorComponent;
