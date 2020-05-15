import React, { useState, useEffect } from "react";
import CreateHelperItem from "./CreateHelperStep";
import useForm from "../../../hooks/useForm";
import { connect } from "react-redux";
import { firebase, database } from "../../../firebase/firebase";
import { fetchHelpers } from "../../../redux/actions/helpers.actions";
import { v4 as uuid } from "uuid";
import { history } from "../../../App";

const CreateHelperForm = ({ userUid }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const helperId = uuid();
		database
			.ref(`users/${userUid}/helpers/${helperId}`)
			.set({
				title,
				description,
				id: helperId,
			})
			.then((helper) => history.push(`/helpers/${helperId}`));
	};

	return (
		<div className="container mt-5">
			<h3>Create your new helper</h3>

			<div className="row">
				<div className="col-md-12">
					<form onSubmit={handleSubmit} className="CreateHelperItem__form">
						<div className="form-group">
							<label htmlFor="">Title</label>
							<input
								type="text"
								className="form-control"
								value={title}
								placeholder="title"
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="">Description</label>
							<input
								type="text"
								className="form-control"
								value={description}
								placeholder="title"
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>
						<button className="button" type="submit">
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
