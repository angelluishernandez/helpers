import React from "react";

const EditorContent = ({ content }) => {
	return <p dangerouslySetInnerHTML={{ __html: content }}></p>;
};

export default EditorContent;
