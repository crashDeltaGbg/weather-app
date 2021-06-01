import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../actions/searchAction';
import { setWeather } from '../actions/weatherAction';
import { useState } from 'react';

// const dispatch = useDispatch();

// const search = true;

// useEffect(() => {
//   dispatch(setSearch(search));
// }, [search]);

function Search() {
	const [query, setQuery] = useState('');

	async function fetchWeather() {
		console.log('fetching');
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1dc27327c1655e53a85e6e5a889fccee`
		);

		const data = await response.json();

		dispatch(setWeather(data));
	}

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setSearch(true));
	}, []);

	return (
		<section>
			{/* <header>
        <img src="../assets/img/svg/logo.svg" alt="Weather App logotype" className="iconsSmall" />
        <img src="../assets/img/svg/geolocation.svg" alt="Geolocation icon" className="iconsSmall" />
      </header> */}
			<section>
				<input
					id="location"
					type="text"
					className="search-bar"
					placeholder="Sök"
					onChange={(e) => setQuery(e.target.value)}
				/>
			</section>
			<footer>
				<button onClick={fetchWeather}>What's the weather like?</button>
			</footer>
		</section>
	);
}

export default Search;
