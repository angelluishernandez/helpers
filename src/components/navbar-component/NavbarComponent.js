import React from "react";

const NavbarComponent = () => {
	return (
		<nav className="navbar navbar-expand-lg NavbarComponent">
			<a className="navbar-brand" href="#">
				Helpers
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarText">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<a className="nav-link" href="#">
							Your tasks
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Add a new task
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavbarComponent;
