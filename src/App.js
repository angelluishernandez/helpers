import React from "react";
import "./App.css";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import HomePage from "./components/home/HomePage";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import CreateHelperForm from "./components/helpers-components/create-helper/CreateHelperForm";
import HelperPage from "./components/helpers-components/helper-page/HelperPage";
export const history = createBrowserHistory();

const App = (props) => {
	return (
		<Router history={history}>
			<div className="App">
				<Switch>
					<PublicRoute exact path="/" component={HomePage} />
					<PrivateRoute exact path="/dashboard" component={Dashboard} />
					<PrivateRoute
						exact
						path="/create-helper"
						component={CreateHelperForm}
					/>
					<PrivateRoute
						exact
						path="/helpers/:helperId"
						component={HelperPage}
					/>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
