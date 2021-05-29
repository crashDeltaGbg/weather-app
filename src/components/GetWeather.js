import { useDispatch, useSelector } from 'react-redux';
import { setWeather } from '../actions/weatherAction';
import { useState, useEffect } from 'react';
import Weather from './weather';

function GetWeather() {
	console.log('what up yo?'); // 1. Logs

	const dispatch = useDispatch();

	const weather = useSelector((state) => state.weather);

	const [query, setQuery] = useState('Gothenburg');

	console.log('Weather:', weather); // 2. Logs an empty object as expected

	async function fetchWeather() {
		console.log('fetching'); // 4. Does not log!
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1dc27327c1655e53a85e6e5a889fccee`
		);
		console.log('response:', response);
		const data = await response.json();
		console.log('data:', data);
		dispatch(setWeather(data));
	}


	/*const fetchWeather = useCallback(() => {
    console.log('fetching'); // 4. Does not log!
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=1dc27327c1655e53a85e6e5a889fccee')
      .then(response => response.json())
        .then(data => dispatch(setWeather(data)));
  }, [dispatch])*/

	useEffect(() => {
		console.log('useEffect: ', weather);
	}, [weather]);

  useEffect(() => {
    console.log(query);
  }, [query]);

	//  useEffect(() => {
	//    console.log('calling fetch'); // 3. Does not log!
	//    fetchWeather();
	// }, []);

	return (
		<main>
			{weather.coord ? (
				<Weather weather={weather} />
			) : (
				<p>Awaiting fetch data</p>
			)}
				<input
					id="location"
					type="text"
					className="search-bar"
					placeholder="Search..."
					onChange={(e) => setQuery(e.target.value)}
				/>
			 {/* <input type="submit" value="Search" onSubmit={fetchWeather} />  */}
			<button onClick={fetchWeather}>Search!</button>
		</main>
	);
}

export default GetWeather;















// switch (weather.description) {
 
//   case 'clear sky':
//     document.body.style.backgroundImage = "url('bilder/7c.jpg')"
//     break
//   case 'broken clouds':
//     document.body.style.backgroundImage = "url('bilder/8c.jpg')"
//     break
//   case 'light rian':
//     document.body.style.backgroundImage = "url('bilder/9c.jpg')"
//     break

//   case 'snow':
//     document.body.style.backgroundImage = "url('bilder/10c.jpg')"
//     break
//   case 'few clouds':
//     document.body.style.backgroundImage = "url('bilder/11C.jpg')";
//     break
//   case 'scattered clouds':
//     document.body.style.backgroundImage = "url('bilder/12C.jpg')";
//     break
//   case 'shower rain':
//     document.body.style.backgroundImage = "url('bilder/14C.jpg')";
//     break
// }