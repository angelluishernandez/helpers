import React from "react";

const EditorContent = ({ content }) => {
	const createMarkup = (html) => ({ __html: html });
	return <div dangerouslySetInnerHTML={createMarkup(content)} />;
};

export default EditorContent;
