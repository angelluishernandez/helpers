import React from "react";
import { firebase } from "../../firebase/firebase";
import { history } from "../../App";

const Dashboard = ({ firebaseAuth }) => {
	const doSignOut = () => {
		firebase
			.auth()
			.signOut()
			.then(() => history.push("/"));
	};
	return (
		<div>
			<button className="btn btn-primary">Hello</button>
			<button className="btn btn-danger" onClick={doSignOut}>
				Sign Out
			</button>
		</div>
	);
};

export default Dashboard;
