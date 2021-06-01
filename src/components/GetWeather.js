// import { useSelector } from 'react-redux';
// import { setWeather } from '../actions/weatherAction';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Weather from './Weather';
// import Search from '../views/Search';
// import Splash from '../views/Splash';

// function GetWeather() {
// console.log('From GetWeather:', document.getElementById('temp')); // 1. Logs

// const dispatch = useDispatch();

// const weather = useSelector((state) => state.weather);

// const [query, setQuery] = useState('');

// let search = useSelector((state) => state.search);

// let location = 'Göteborg';

// let searchSwitch = () => (search = !search);

// console.log('Weather:', weather); // 2. Logs an empty object as expected

/*const fetchWeather = useCallback(() => {
    console.log('fetching'); // 4. Does not log!
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=1dc27327c1655e53a85e6e5a889fccee')
      .then(response => response.json())
        .then(data => dispatch(setWeather(data)));
  }, [dispatch])*/

//  useEffect(() => {
//    console.log('calling fetch'); // 3. Does not log!
//    fetchWeather();
// }, []);

// return (
// <main className="view">
// 	<header>
//     <img src="../assets/img/svg/logo.svg" alt="Weather App logotype" className="iconsSmall" />
//     {search ?
// 			<img src="../assets/img/svg/geolocation.svg" alt="Geolocation icon" className="iconsSmall" /> :
// 			<img src="../assets/img/svg/search-icon.svg" alt="Search icon" onClick={ searchButton } />}
//   </header>
// 	{search ? <Search /> : <Weather weather={weather} />}
// </main>

// 		<main>
// 			<header>
// 				<img src="../assets/img/svg/logo.svg" alt="App logotype" />
// 				{search ? (
// 					<img src="../assets/img/svg/geolocation.svg" alt="Geolocation icon" />
// 				) : (
// 					<img src="../assets/img/svg/search-icon.svg" alt="Search icon" />
// 				)}
// 			</header>
// 		</main>
// 	);
// }

// export default GetWeather;

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
