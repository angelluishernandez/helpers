import React from "react";

const EditorContent = ({ content }) => {
	const html = {
		__html: content,
	};

	return <p dangerouslySetInnerHTML={{ __html: content }}></p>;
};

export default EditorContent;
