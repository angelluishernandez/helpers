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
import { setUser, logout } from "./redux/actions/auth.actions";

const store = configStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,

	document.getElementById("root")
);

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(setUser(user.uid));
	} else {
		store.dispatch(logout());
		history.push("/");
	}
});

serviceWorker.unregister();
