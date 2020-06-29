import React from "react";
import { useDropzone } from "react-dropzone";

const FileUploadComponent = ({
	handleFileUpload,
	uploadImg,
	image,
	imageHasBeenUploaded,
}) => {
	const { getRootProps, getInputProps } = useDropzone({
		onDrop: (files) => handleFileUpload(files[0]),
	});

	const imageName = image.name;
	console.log(imageName);

	return (
		<section className="container mb-5">
			<div {...getRootProps({ className: "dropzone mb-3" })}>
				<input {...getInputProps()} />
				<p>
					{imageHasBeenUploaded
						? `${imageName}`
						: "You can drag and drop an image here"}
				</p>
			</div>

			<button type="button" onClick={() => uploadImg(image)} className="button">
				{imageHasBeenUploaded
					? "An image has been uploaded"
					: "Upload this image"}
			</button>
		</section>
	);
};

export default FileUploadComponent;
