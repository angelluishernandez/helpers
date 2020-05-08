import React, { useState } from "react";
import AuthModal from "../authmodal/AuthModal";

const MainContainer = ({ useStyles }) => {
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div>
			<AuthModal
				closeModal={closeModal}
				modalIsOpen={modalIsOpen}
				isLogin={false}
			/>
			<div className="row">
				<div className="main-container__container col-md-4 mt-5">
					<h3 className="main-container__title">
						Store your knowledge <br />
						and access it quickly
					</h3>
					<p className="mt-5 main-container__body">
						With helpers you can create your own library of knowledge content
						and access it easily one click at a time
					</p>
					<button className="main-btn" onClick={() => openModal()}>
						Sign up
						<div className="main-btn__horizontal"></div>
						<div className="main-btn__vertical"></div>
					</button>
				</div>
				<div className="main-container__container col-md-8">
					<img src="main-container.svg" alt="main-container" />
				</div>
			</div>
		</div>
	);
};

export default MainContainer;
