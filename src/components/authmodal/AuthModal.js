import React from "react";
import Modal from "react-modal";
import UserForm from "../forms/UserForm";

const AuthModal = ({ closeModal, modalIsOpen, isLogin }) => {
	return (
		<Modal
			className="LoginModal"
			isOpen={modalIsOpen}
			contentLabel="Login"
			ariaHideApp={false}
			onRequestClose={() => closeModal()}
			closeTimeoutMS={200}
		>
			<UserForm isLogin={isLogin} />
		</Modal>
	);
};

export default AuthModal;
