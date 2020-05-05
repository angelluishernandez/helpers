import React, { useState } from "react";
import Modal from "react-modal";
import Login from "./Login";

const LoginModal = ({ modalIsOpen, closeModal }) => {
	return (
		<Modal
			className="LoginModal"
			isOpen={modalIsOpen}
			contentLabel="Login"
			ariaHideApp={false}
			onRequestClose={() => closeModal()}
			closeTimeoutMS={200}
		>
			<Login />
		</Modal>
	);
};

export default LoginModal;
