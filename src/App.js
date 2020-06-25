import React, { useEffect, useState } from "react";
import "./App.css";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import HomePage from "./components/home/HomePage";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import { auth } from "firebase";
import CreateHelperForm from "./components/helpers-components/create-helper/CreateHelperForm";
import Layout from "./components/dashboard/sidebar/Layout";
import HelperPage from "./components/helpers-components/helper-page/HelperPage";
import ProfilePage from "./components/Profile/ProfilePage";
import AuthRoute from "./components/AuthRoute.js/AuthRoute";

export const history = createBrowserHistory();

function App() {
	return (
		<Router history={history}>
			<div className="App">
				<Switch>
					<PublicRoute exact path="/" component={HomePage} />
					<PrivateRoute exact path="/dashboard" component={Dashboard} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
