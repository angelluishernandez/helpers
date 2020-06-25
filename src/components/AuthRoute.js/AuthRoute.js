import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = (props) => {
	if (!props.authenticated) {
		return <Redirect to={"/"} />;
	} else {
		return <Route {...props} />;
	}
};

export default AuthRoute;
