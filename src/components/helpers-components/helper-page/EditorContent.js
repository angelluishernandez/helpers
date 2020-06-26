import React from "react";
import ReactHtmlParser, {
	processNodes,
	convertNodeToElement,
	htmlparser2,
} from "react-html-parser";

const EditorContent = ({ content }) => {
	const html = content;

	return <div>{ReactHtmlParser(html)}</div>;
};

export default EditorContent;
