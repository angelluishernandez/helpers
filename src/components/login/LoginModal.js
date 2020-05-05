import React from "react";
import Modal from "react-modal";
import Login from "./Login";
import Signup from "../signin/Singin";

const LoginModal = ({ modalIsOpen, closeModal, isLogin }) => {
	return (
		<Modal
			className="LoginModal"
			isOpen={modalIsOpen}
			contentLabel="Login"
			ariaHideApp={false}
			onRequestClose={() => closeModal()}
			closeTimeoutMS={200}
		>
			{isLogin ? <Login /> : <Signup />}
		</Modal>
	);
};

export default LoginModal;
