import React, { useEffect } from "react";
import { firebase } from "../../firebase/firebase";
import { history } from "../../App";
import SideBar from "./sidebar/SidebarComponent";
import { connect } from "react-redux";
import { fetchHelpers } from "../../redux/actions/helpers.actions";

const Dashboard = ({ fetchHelpers, userUid }) => {
	useEffect(() => {
		fetchHelpers();
	});

	const doSignOut = () => {
		firebase
			.auth()
			.signOut()
			.then(() => history.push("/"));
	};

	//Use the dashboard to show the latest helpers

	return <div></div>;
};

const mapStateToProps = (state) => ({
	userUid: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
	fetchHelpers: () => dispatch(fetchHelpers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
