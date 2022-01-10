import logo from "./logo.svg";
import "./App.css";
import Login from "@views/login";
import Header from "@components/header";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Project Directory structure</p>
				<Header />
				<Login />
			</header>
		</div>
	);
}

export default App;
