import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "../components/dashboard/sidebar/Layout";
import { connect } from "react-redux";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			component={(props) =>
				isAuthenticated ? (
					<div>
						<Layout />
						<Component {...props} />
					</div>
				) : (
					<Redirect to={{ pathname: "/" }} />
				)
			}
		/>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.user,
});

export default connect(mapStateToProps)(PrivateRoute);
