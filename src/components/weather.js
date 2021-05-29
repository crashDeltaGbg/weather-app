function Weather({ weather }) {
  console.log('Weather component:', weather);

  let temp = Math.round(weather.main.temp);

  let location = weather.name;

  let sky = weather.weather[0].description;
  
  const Kelvin = 273;

  let unit = 'C';

  // function switchUnit() {
  //   unit === 'C' ? unit ='F' : unit = 'C';
  // }

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
			<div className="search-box">
			
			</div>
			<div className="search-box">
				<div className="location-box">
					<div className="location">{location}</div>
					<div className="temp">
						{temp - Kelvin}&deg;{unit}
						{/*<button onClick={ switchUnit }>switch</button>*/}
					</div>
					<div className="sky">{sky}</div>

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