import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const EditorComponent = () => {
	const [editorContent, setEditorContent] = useState("");

	const handleEditorChange = (content, editor) => {
		setEditorContent(content);
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
					"undo redo | formatselect | bold italic backcolor | \
				alignleft aligncenter alignright alignjustify | \
				bullist numlist outdent indent | removeformat | help",
			}}
			onEditorChange={handleEditorChange}
		/>
	);
};

export default EditorComponent;
