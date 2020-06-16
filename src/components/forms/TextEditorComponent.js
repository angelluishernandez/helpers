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
				height: 500,

				plugins: [
					"advlist autolink lists link image charmap print preview anchor",
					"searchreplace visualblocks code fullscreen",
					"insertdatetime media table paste code help wordcount",
					"codesample",
				],

				toolbar:
					"codesample |undo redo |  formatselect | bold italic backcolor |  alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help ",
				content_css: [
					"//fonts.googleapis.com/css?family=Lato:300,300i,400,400i",
					"//www.tiny.cloud/css/codepen.min.css",
				],
			}}
			textareaName="editor"
			onEditorChange={onEditorChange}
		/>
	);
};

export default TextEditorComponent;
