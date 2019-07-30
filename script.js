$(document).ready(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            getWeatherInfo(position);
        });
    }
})


async function getWeatherInfo(position) {
    const weatherImg = {
        "clear sky":"01d",
        "few clouds":"02d",
        "scattered clouds":"03d",
        "broken clouds":"04d",
        "shower rain":"09d",
        "rain":"10d",
        "thunderstorm":"01d",
        "snow":"13d",
        "mist":"50d",

    };
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    axios.get('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=f62b35e348798cbc7808b8e7b1262950')
        .then(function (response) {
            const temperature = parseFloat(response.data.main.temp) - 273.15;
            console.log(response);
            const weather = response.data.weather[0].description;
            $("#title-text").text("Current Temperature");
            $("#weather-icon").attr('src','http://openweathermap.org/img/wn/'+weatherImg[weather]+'@2x.png'); 
            $('#temp').text(temperature+' °c');
            $('#city').text(response.data.name);
        })
        .catch(function (error) {
            console.log(error);
        })
}
