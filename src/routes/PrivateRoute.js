import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavbarComponent from "../components/dashboard/navbar-component/NavbarComponent";
import SidebarComponent from "../components/dashboard/sidebar/SidebarComponent";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				authenticated === true ? (
					<>
						<SidebarComponent />
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
