import React, { useEffect } from "react";
// import SidebarComponent from "./sidebar/SidebarComponent";
import { connect } from "react-redux";
import { fetchHelpers } from "../../redux/actions/helpers.actions";

const Dashboard = ({ fetchHelpers, userUid }) => {
	useEffect(() => {
		fetchHelpers();
	});

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
