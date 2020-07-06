import React, { useState } from "react";
import { connect } from "react-redux";
import DashboardCard from "./DashboardCard";
import { useEffect } from "react";
import {
	fetchHelpers,
	fetchPublicHelpers,
} from "../../redux/actions/helpers.actions";

const Dashboard = ({
	userUid,
	helpers,
	publicHelpers,
	fetchPublicHelpers,
	fetchHelpers,
}) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			await fetchHelpers();
			await fetchPublicHelpers();
		};

		getData().then(() => setLoading(false));
		//eslint-disable-next-line
	}, []);

	//Use the dashboard to show the latest helpers
	return (
		<>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div className="container mt-5">
					<div className="row ">
						{helpers.map((helper, index) => (
							<DashboardCard helper={helper} key={index} />
						))}
					</div>
					<hr className="col-8" />
					<div className="row">
						{publicHelpers.map((helper, index) => (
							<DashboardCard helper={helper} key={index} />
						))}
					</div>
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

const mapDispatchToProps = (dispatch) => ({
	fetchHelpers: () => dispatch(fetchHelpers()),
	fetchPublicHelpers: () => dispatch(fetchPublicHelpers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
