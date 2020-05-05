import React, { useState } from "react";
import LoginModal from "../login/LoginModal";

const NavbarComponent = () => {
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	return (
		<nav className="navbar navbar-expand-lg NavbarComponent">
			<img src="logo.svg" alt="logo" className="logo" />
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
			<div className="signin">
				<button className="button" onClick={() => openModal()}>
					Sign in
				</button>
			</div>
			<LoginModal
				isLogin={true}
				closeModal={closeModal}
				modalIsOpen={modalIsOpen}
			/>
		</nav>
	);
};

export default NavbarComponent;
