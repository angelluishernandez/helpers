import React, { useState } from "react";
import { firebase, googleAuthProvider } from "../../firebase/firebase";
import { history } from "../../App";

const UserForm = ({ isLogin }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(undefined);

	///Sign in

	const handleSignInSubmit = (e) => {
		e.preventDefault();
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				history.push("/dashboard");
			})
			.catch((error) => setError(error.message));
	};

	const handleSocialSignIn = (e) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then((authUser) => {
				history.push("/dashboard");
			})
			.catch((error) => setError(error.message));
	};

	// Sing Up

	const handleSignUpSubmit = (e) => {
		e.preventDefault();
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((authUser) => history.push("/dashboard"))
			.catch((error) => setError(error.message));
	};

	return (
		<div className="UserForm">
			<form onSubmit={isLogin ? handleSignInSubmit : handleSignUpSubmit}>
				<div className="form-group">
					<label htmlFor="email" className="Login__input">
						Your email
					</label>
					<input
						type="text"
						className="form-control"
						value={email}
						placeholder={"Type your email"}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="" className="Login__input">
						Your password
					</label>
					<input
						className="form-control"
						type="password"
						value={password}
						placeholder="Your password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button className="button">{isLogin ? "Sign in" : "Sign up"}</button>
			</form>
			<hr />
			<div>
				<button className="button" onClick={handleSocialSignIn}>
					<img src="google.svg" alt="google" className="social-login " />{" "}
					<span> </span> {isLogin ? "Sign in" : "Sign up"} with Google
				</button>
			</div>
			{error !== undefined ? (
				<div className="alert alert-danger">{error}</div>
			) : null}
		</div>
	);
};

export default UserForm;
