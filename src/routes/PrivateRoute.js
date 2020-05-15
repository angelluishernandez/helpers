import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "../components/dashboard/sidebar/Layout";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				authenticated === true ? (
					<>
						<Layout />
						<Component {...props} />
					</>
				) : (
					<Redirect to={{ pathname: "/", state: { from: props.location } }} />
				)
			}
		/>
	);
};

export default PrivateRoute;
