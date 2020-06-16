import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const EditorComponent = ({
	setEditorContent,
	setStep,
	step,
	editorContent,
}) => {
	const handleEditorChange = (content, editor) => {
		setEditorContent(content);
		setStep({ ...step, description: editorContent });
	};

	return (
		<Editor
			init={{
				height: 300,
				menubar: false,

				plugins: [
					"advlist autolink lists link image charmap print preview anchor",
					"searchreplace visualblocks code fullscreen",
					"insertdatetime media table paste code help wordcount",
				],
				toolbar:
					"undo redo | formatselect | bold italic backcolor |  alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help",
				valid_children: "+body[style]",
			}}
			onEditorChange={handleEditorChange}
			textareaName="description"
		/>
	);
};

export default EditorComponent;
