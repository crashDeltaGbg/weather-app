function Weather({ weather }) {
	console.log('Weather component:', weather);

	let temp = Math.round(weather.main.temp);

	let location = weather.name;

	let sky = weather.weather[0].main;

	let skyDetailed = weather.weather[0].description;

	const Kelvin = 273;

	let unit = 'C';

	let tempDivClass = 'default';

	const bodyStyle = document.body.style;

	switch (sky) {
		case 'Clear':
			tempDivClass = 'clear';
			bodyStyle.backgroundColor = '#3fb3f4';
			break;
		case 'Clouds':
			switch (skyDetailed) {
				case 'few clouds':
					tempDivClass = 'partial';
					bodyStyle.backgroundColor = '#3dacea';
					break;
				case 'scattered clouds':
					tempDivClass = 'partial';
					bodyStyle.backgroundColor = '#3dacea';
					break;
				case 'boken clouds':
					tempDivClass = 'cloudy';
					bodyStyle.backgroundColor = '#2798d7';
					break;
				case 'overcast clouds':
					tempDivClass = 'dark-clouds';
					bodyStyle.backgroundColor = '#1674a9';
					break;
				default:
					tempDivClass = 'cloudy';
					bodyStyle.backgroundColor = '#2798d7';
			}
			break;
		case 'Drizzle':
			tempDivClass = 'rain';
			bodyStyle.backgroundColor = '#115a83';
			break;
		case 'Rain':
			tempDivClass = 'rain';
			bodyStyle.backgroundColor = '#115a83';
			break;
		case 'Thunderstorm':
			tempDivClass = 'thunder';
			bodyStyle.backgroundColor = '#115a83';
			break;
		case 'Mist':
			tempDivClass = 'foggy';
			bodyStyle.backgroundColor = '#298ec7';
			break;
		case 'Tornado':
			tempDivClass = 'foggy';
			bodyStyle.backgroundColor = '#298ec7';
			break;
		case 'Squall':
			tempDivClass = 'foggy';
			bod;

			yStyle.backgroundColor = '#298ec7';
			break;
		case 'Ash':
			tempDivClass = 'foggy';
			bodyStyle.backgroundColor = '#298ec7';
			break;
		case 'Sand':
			tempDivClass = 'foggy';
			bodyStyle.backgroundColor = '#298ec7';
			break;
		case 'Fog':
			tempDivClass = 'foggy';
			bodyStyle.backgroundColor = '#298ec7';
			break;
		case 'Dust':
			tempDivClass = 'foggy';
			bodyStyle.backgroundColor = '#298ec7';
			break;
		case 'Haze':
			tempDivClass = 'foggy';
			bodyStyle.backgroundColor = '#298ec7';
			break;
		case 'Smoke':
			tempDivClass = 'foggy';
			bodyStyle.backgroundColor = '#298ec7';
			break;
		case 'Snow':
			tempDivClass = 'snow';
			bodyStyle.backgroundColor = '#2798d7';
			break;
		default:
			document.body.style.backgroundImage =
				'linear-gradient(to bottom, rgba(153,204,255,0.2), rgba(153,204,255,0.75))';
	}

	const dateBuilder = (d) => {
		let months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		let days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		];

		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${day} ${date} ${month} ${year}`;
	};

	return (
		<main>
			<div className="search-box"></div>
			<div className="search-box">
				<div className="location-box">
					<div id="temp" className={tempDivClass}>
						{temp - Kelvin}&deg;{unit}
					</div>
					<div className="sky">{skyDetailed}</div>
					<div className="location">{location}</div>
					{/* <div id="icon">Div ID: icon</div> */}

					<div className="date">{dateBuilder(new Date())}</div>
				</div>
			</div>
		</main>
	);
}

// if={ location }
// &deg;{ unit }<button onClick={ unit === 'C' ? unit ='F' : unit = 'C' }>  switch</button>

// function celsiusToFahrenheit(temperature) {
//   return (temp * 9 / 5) + 32
// }

export default Weather;
