import React, { useEffect, useState } from "react";
import "./App.css";
import NavbarComponent from "./components/navbar-component/NavbarComponent";
import { createBrowserHistory } from "history";
import { Switch, Route, Router } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import HomePage from "./components/home/HomePage";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import { auth } from "firebase";

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
			</div>
		</Router>
	);
};

export default App;
