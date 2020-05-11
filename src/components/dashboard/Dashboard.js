import React from "react";
import { firebase } from "../../firebase/firebase";
import { history } from "../../App";
import SideBar from "./sidebar/SidebarComponent";

const Dashboard = ({ firebaseAuth }) => {
	const doSignOut = () => {
		firebase
			.auth()
			.signOut()
			.then(() => history.push("/"));
	};
	return <div></div>;
};

export default Dashboard;
