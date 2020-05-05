import React, { useState } from "react";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [displayName, setDisplayName] = useState("");
	const [error, setError] = useState(null);

	const createUserHandler = (e, email, password) => {
		e.preventDefault();
		setEmail("");
		setPassword("");
		setDisplayName("");
	};

	const onChangeHandler = (e) => {
		const { name, value } = e.currentTarget;

		switch (true) {
			case name === "email":
				setEmail(value);
				break;
			case name === "password":
				setPassword(value);
				break;
			case name === "displayName":
				setDisplayName(value);
				break;
			default:
				break;
		}
	};

	return (
		<div className="Signup">
			<h1> Sign Up</h1>
			{error ? (
				<div className="alert alert-danger">Something went wrong!</div>
			) : null}

			<form action="post">
				<div className="form-group">
					<label htmlFor="name" className="Login__input">
						Your email
					</label>
					<input
						className="form-control"
						type="text"
						value={email}
						placeholder="..."
						onChange={(e) => onChangeHandler(e)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password" className="Login__input">
						Your password
					</label>
					<input
						className="form-control"
						type="password"
						value={password}
						placeholder="..."
						onChange={(e) => onChangeHandler(e)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="displayName" className="Login__input">
						Your display name
					</label>
					<input
						className="form-control"
						type="text"
						value={displayName}
						placeholder="..."
						onChange={(e) => onChangeHandler(e)}
					/>
				</div>

				<button
					className="button"
					type="submit"
					onClick={(e) => createUserHandler(e, email, password)}
				>
					Sign in
				</button>
			</form>
			<hr />
			<div>
				<button className="button">
					<img src="google.svg" alt="google" className="social-login " />{" "}
					<span> </span> Sign in with Google
				</button>
			</div>
		</div>
	);
};

export default Signup;
