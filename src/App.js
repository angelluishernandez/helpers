import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavbarComponent from "./components/navbar-component/NavbarComponent";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
	return (
		<div className="App">
			<NavbarComponent />
			<Dashboard />
		</div>
	);
}

export default App;
