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
import {
	setUser,
	logout,
	login,
	setCurrentUser,
} from "./redux/actions/auth.actions";

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
		const currentUser = {
			name: user.displayName,
			email: user.email,
			photoURL: user.photoURL,
		};
		store.dispatch(login(user.uid));
		store.dispatch(setUser(user.uid));
		store.dispatch(setCurrentUser(currentUser));

		renderApp();
		if (history.location.pathname === "/") {
			history.push("/dashboard");
		}
	} else {
		renderApp();
		store.dispatch(logout());
		history.push("/");
	}
});

serviceWorker.unregister();
