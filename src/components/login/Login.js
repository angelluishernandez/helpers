import React, { useState } from "react";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState({});

	const onUsernameChange = (e) => setUsername(e.target.value);
	const onPasswordChange = (e) => setPassword(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault();
		setUser({
			username,
			password,
		});
		setUsername();
		setPassword();
	};

	return (
		<div className="Login">
			<form action="post" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<label htmlFor="name" className="Login__input">
						Your username
					</label>
					<input
						className="form-control"
						type="text"
						value={username}
						placeholder="..."
						onChange={(e) => onUsernameChange(e)}
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
						onChange={(e) => onPasswordChange(e)}
					/>
				</div>

				<button className="button" type="submit">
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

export default Login;
