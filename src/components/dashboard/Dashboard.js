import React, { useState } from "react";
import { connect } from "react-redux";
import DashboardCard from "./DashboardCard";
import { useEffect } from "react";
import {
	fetchHelpers,
	fetchPublicHelpers,
} from "../../redux/actions/helpers.actions";
import CategorySelector from "../UI/CategorySelector";

const Dashboard = ({
	userUid,
	helpers,
	publicHelpers,
	fetchPublicHelpers,
	fetchHelpers,
}) => {
	const [loading, setLoading] = useState(true);
	const [localHelpers, setLocalHelpers] = useState([]);
	const [localPublicHelpers, setLocalPublicHelpers] = useState([]);

	useEffect(() => {
		const getData = async () => {
			await fetchHelpers();
			await fetchPublicHelpers();
		};
		getData().then(() => setLoading(false));
		//eslint-disable-next-line
	}, []);

	// Load helpers and public helpers from redux in local state to be able to handle them easily

	useEffect(() => {
		if (!loading) {
			setLocalHelpers([...helpers]);
			setLocalPublicHelpers([...publicHelpers]);
		}
		//eslint-disable-next-line
	}, [loading]);

	const handleSelectorChange = (e, isPublic) => {
		const category = e.target.value;

		if (isPublic) {
			const filteredHelpers = publicHelpers.filter((helper) =>
				category !== "all" ? helper.category === category : publicHelpers
			);
			setLocalPublicHelpers(filteredHelpers);
		} else {
			const filteredHelpers = helpers.filter((helper) =>
				category !== "all" ? helper.category === category : helpers
			);
			setLocalHelpers(filteredHelpers);
		}
	};

	console.log(localHelpers, localPublicHelpers);

	//Use the dashboard to show the latest helpers
	return (
		<>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div className="container mt-5">
					<div className="row">
						<CategorySelector
							handleSelectorChange={handleSelectorChange}
							isPublic={false}
						/>
					</div>
					<div className="row ">
						{localHelpers.map((helper, index) => (
							<DashboardCard helper={helper} key={index} />
						))}
					</div>
					<hr className="col-8" />
					<div className="row">
						<CategorySelector
							handleSelectorChange={handleSelectorChange}
							isPublic={true}
						/>
					</div>
					<div className="row">
						{localPublicHelpers.map((helper, index) => (
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
