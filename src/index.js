import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./styles/styles.scss";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// const store = configStore();

// const jsx = (
// 	<Provider store={store}>
// 		<App />
// 	</Provider>
// );

// let hasRendered = false;
// console.log(hasRendered);

// const renderApp = () => {
// 	if (!hasRendered) {
// 		ReactDOM.render(jsx, document.getElementById("root"));
// 		hasRendered = true;
// 	}
// };

// ReactDOM.render(<HomePage />, document.getElementById("root"));

// firebase.auth().onAuthStateChanged((user) => {
// 	if (user) {
// 		store.dispatch(login(user.uid));
// 		store.dispatch(startSetHelpers()).then(() => {
// 			renderApp();
// 			if (history.location.pathname === "/") {
// 				history.push("/dashboard");
// 			}
// 		});
// 	} else {
// 		store.dispatch(logout());
// 		history.push("/");
// 	}
// });

serviceWorker.unregister();
