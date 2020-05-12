import React, { useEffect, useState } from "react";
import "./App.css";
import { createBrowserHistory } from "history";
import { Switch, Route, Router } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import HomePage from "./components/home/HomePage";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import { auth } from "firebase";
import CreateHelperItem from "./components/helpers-components/create-helper/CreateHelperStep";
import CreateHelperForm from "./components/helpers-components/create-helper/CreateHelperForm";
import HelperPage from "./components/helpers-components/helper-page/HelperPage";
export const history = createBrowserHistory();

const App = (props) => {
	const [authenticated, setAuthenticated] = useState(false);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		auth().onAuthStateChanged((user) => {
			if (user) {
				setAuthenticated(true);
				setLoading(false);
			} else {
				setAuthenticated(false);
				setLoading(false);
			}
		});
	});

	return loading ? (
		<h1>Loading</h1>
	) : (
		<Router history={history}>
			<div className="App">
				<PublicRoute
					exact
					path="/"
					component={HomePage}
					authenticated={authenticated}
				/>
				<PrivateRoute
					exact
					path="/dashboard"
					component={Dashboard}
					authenticated={authenticated}
				/>
				<PrivateRoute
					exact
					path="/create-helper"
					component={CreateHelperForm}
					authenticated={authenticated}
				/>
				<PrivateRoute
					exact
					path="/helpers/:helperId"
					component={HelperPage}
					authenticated={authenticated}
				/>
			</div>
		</Router>
	);
};

export default App;
