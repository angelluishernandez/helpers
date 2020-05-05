import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./styles/styles.scss";
import * as serviceWorker from "./serviceWorker";
import { firebase } from "./firebase/firebase";
import UserProvider from "./contexts/user.context";

ReactDOM.render(
	// <UserProvider>
	<App />,
	// </UserProvider>
	document.getElementById("root")
);

serviceWorker.unregister();
