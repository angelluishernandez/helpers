import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App, { history } from "./App";
import "./styles/styles.scss";
import * as serviceWorker from "./serviceWorker";
import "babel-polyfill";
import { Provider } from "react-redux";
import configStore from "./redux/store/configStore";
import { firebase } from "./firebase/firebase";
import { setUser, logout, login } from "./redux/actions/auth.actions";
import { fetchHelpers } from "./redux/actions/helpers.actions";

const store = configStore();

const jsx = (
	<Provider store={store}>
		<App />
	</Provider>
);

let hasRendered = false;

const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(jsx, document.getElementById("root"));
		hasRendered = true;
	}
};

const Loading = () => {
	return <div>Loading</div>;
};

ReactDOM.render(<Loading />, document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(login(user.uid));
		store.dispatch(setUser(user.uid));
		store.dispatch(fetchHelpers(user.uid)).then(() => {
			renderApp();
			if (history.location.pathname === "/") {
				history.push("/dashboard");
			}
		});
	} else {
		store.dispatch(logout());
		renderApp();
		history.push("/");
	}
});

serviceWorker.unregister();
