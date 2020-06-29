import React from "react";
import { connect } from "react-redux";
import { fetchHelpers } from "../../redux/actions/helpers.actions";
import DashboardCard from "./DashboardCard";

const Dashboard = ({ userUid, helpers, publicHelpers }) => {
	const helpersJSX = helpers.map((helper, index) => (
		<DashboardCard helper={helper} key={index} />
	));

	const publicHelpersJSX = publicHelpers.map((helper, index) => (
		<DashboardCard helper={helper} key={index} />
	));

	//Use the dashboard to show the latest helpers
	return (
		<div className="container mt-5">
			<div className="row  d-flex justify-content-center">{helpersJSX}</div>
			<div className="row d-flex justify-content-center">
				{publicHelpersJSX}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	userUid: state.auth.user,
	helpers: state.helpers.helpers,
	publicHelpers: state.helpers.publicHelpers,
});

export default connect(mapStateToProps)(Dashboard);
