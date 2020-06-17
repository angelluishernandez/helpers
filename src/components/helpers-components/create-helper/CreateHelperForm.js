import React, { useState } from "react";
import FileUploadComponent from "./FileUploadComponent";
import { connect } from "react-redux";
import { database, storage } from "../../../firebase/firebase";
import { fetchHelpers } from "../../../redux/actions/helpers.actions";
import { v4 as uuid } from "uuid";
import { history } from "../../../App";
import TextInputs from "./TextInputs";

const CreateHelperForm = ({ userUid }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	// Image upload

	const [image, setImage] = useState({});
	const [imageURL, setImageURL] = useState("");
	const [uploadingImg, setUploadingImg] = useState(false);

	// Image / File handler

	const handleFileUpload = (file) => {
		if (file) {
			setImage(file);
		}
	};

	const uploadImg = (image) => {
		const uploadTask = storage.ref(`images/${image.name}`).put(image);

		uploadTask.on(
			"state_changed",
			(snapshot) => {},
			(err) => console.log(err),
			() => {
				setUploadingImg(true);

				storage
					.ref("images")
					.child(image.name)
					.getDownloadURL()
					.then((url) => {
						setImageURL(url);
						setUploadingImg(false);
					});
			}
		);
	};

	// Handle submit

	const handleSubmit = (e) => {
		e.preventDefault();

		const helperId = uuid();
		database
			.ref(`users/${userUid}/helpers/${helperId}`)
			.set({
				title,
				description,
				image: imageURL,
				id: helperId,
			})
			.then(() => history.push(`/helpers/${helperId}`));
	};

	return (
		<div className="container mt-5">
			<h3>Create your new helper</h3>

			<div className="row">
				<div className="col-md-12">
					<form onSubmit={handleSubmit} className="CreateHelperItem__form">
						<TextInputs
							setDescription={setDescription}
							setTitle={setTitle}
							title={title}
							description={description}
						/>

						<div>
							<FileUploadComponent
								handleFileUpload={handleFileUpload}
								uploadImg={uploadImg}
								image={image}
							/>
						</div>

						<button
							className="button"
							type="submit"
							disabled={uploadingImg ? true : false}
						>
							Create helper
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	userUid: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
	fetchHelpers: (user) => dispatch(fetchHelpers(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateHelperForm);
