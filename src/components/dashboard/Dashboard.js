import React, { useState } from "react";
import { connect } from "react-redux";
import DashboardCard from "./DashboardCard";
import { useEffect } from "react";

const Dashboard = ({ userUid, helpers, publicHelpers }) => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (helpers !== undefined || publicHelpers !== undefined) {
			setLoading(false);
		}

		//eslint-disable-next-line
	}, []);

	const helpersJSX = helpers.map((helper, index) => (
		<DashboardCard helper={helper} key={index} />
	));

	const publicHelpersJSX = publicHelpers.map((helper, index) => (
		<DashboardCard helper={helper} key={index} />
	));

	//Use the dashboard to show the latest helpers
	return (
		<>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div className="container mt-5">
					<div className="row ">{helpersJSX}</div>
					<hr className="col-8" />
					<div className="row">{publicHelpersJSX}</div>
				</div>
			)}
		</>
	);
};

const mapStateToProps = (state) => ({
	userUid: state.auth.user,
	helpers: state.helpers.helpers,
	publicHelpers: state.helpers.publicHelpers,
});

export default connect(mapStateToProps)(Dashboard);
