import './App.css';
import React from 'react';
// import GetWeather from './components/GetWeather';
import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Search from './views/Search';
import Weather from './views/Weather';

function App() {
	let search = useSelector((state) => state.search);

	return (
		<Router>
			<div className="App">
				<header>
					<img src="../assets/img/svg/logo.svg" alt="App logotype" />
					{search ? (
						<img
							src="../assets/img/svg/geolocation.svg"
							alt="Geolocation icon"
						/>
					) : (
						<img src="../assets/img/svg/search-icon.svg" alt="Search icon" />
					)}
				</header>
				<Switch>
					<Route path="/Weather/" component={Weather} />
					<Route path="/" component={Search} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
