import React, { useEffect } from "react";
// import SidebarComponent from "./sidebar/SidebarComponent";
import { connect } from "react-redux";
import { fetchHelpers } from "../../redux/actions/helpers.actions";
import DashboardCard from "./DashboardCard";

const Dashboard = ({ fetchHelpers, userUid, helpers }) => {
	useEffect(() => {
		fetchHelpers();
	}, []);

	const helpersJSX = helpers.map((helper, index) => (
		<DashboardCard helper={helper} key={index} />
	));

	//Use the dashboard to show the latest helpers
	return (
		<div className="container mt-5">
			<div className="row">{helpersJSX}</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	userUid: state.auth.user,
	helpers: state.helpers,
});

const mapDispatchToProps = (dispatch) => ({
	fetchHelpers: () => dispatch(fetchHelpers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
