const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7af1d4454fmsh9366b317cb9ab0ep1c2d0ejsna5362a84c3e2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function getWeather(city){
try {
	cityName.innerHTML=city;
	const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options);
	const result = await response.json();
	console.log(result);
	cloud_pct.innerHTML = result.cloud_pct
	temp.innerHTML = result.temp
	c1.innerHTML=result.temp
	feels_like.innerHTML = result.feels_like
	humidity.innerHTML = result.humidity
	c2.innerHTML=result.humidity
	min_temp.innerHTML = result.min_temp
	max_temp.innerHTML = result.max_temp
	wind_speed.innerHTML = result.wind_speed
	c3.innerHTML=result.wind_speed
	wind_degrees.innerHTML = result.wind_degrees
	sunrise.innerHTML = result.sunrise
	sunset.innerHTML = result.sunset
} catch (error) {
	console.error(error);
}
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Hyderabad")