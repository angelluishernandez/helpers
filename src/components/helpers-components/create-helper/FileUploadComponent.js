import React from "react";
import { useDropzone } from "react-dropzone";

const FileUploadComponent = ({ handleFileUpload, uploadImg, image }) => {
	const { getRootProps, getInputProps } = useDropzone({
		onDrop: (files) => handleFileUpload(files[0]),
	});

	return (
		<section className="container mb-5">
			<div {...getRootProps({ className: "dropzone mb-3" })}>
				<input {...getInputProps()} />
				<p>Drag 'n' drop some files here, or click to select files</p>
			</div>

			<button type="button" onClick={() => uploadImg(image)} className="button">
				Upload this image
			</button>
		</section>
	);
};

export default FileUploadComponent;
