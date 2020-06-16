import React from "react";

const FileUploadComponent = ({ handleFileUpload, uploadingImg }) => {
	return (
		<div className="form-group">
			<input type="file" onChange={handleFileUpload} />
			<button onClick={uploadingImg}>Upload this image</button>
		</div>
	);
};

export default FileUploadComponent;
