const apiKey = "9702f3132cf07572ad4cd7e460df68c7"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
// const city="gujarat";
const city = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherImage = document.querySelector(".weather-icon");
async function checkWeather(city) {
    if (city == "") {
        alert("Enter city");

    }
    else {
        const response = await fetch(apiUrl + `q=${city}` + `&appid=${apiKey}` + `&units=metric`);
        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else {
            var data = await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
            if (data.weather[0].main == "Clouds") {
                weatherImage.src = "images/clouds.png";
            }
            if (data.weather[0].main == "Clear") {
                weatherImage.src = "images/clear.png";
            }
            if (data.weather[0].main == "Humidity") {
                weatherImage.src = "images/humidity.png";
            }
            if (data.weather[0].main == "Snow") {
                weatherImage.src = "images/snow.png";
            }
            if (data.weather[0].main == "Mist") {
                weatherImage.src = "images/mist.png";
            }
            if (data.weather[0].main == "Rain") {
                weatherImage.src = "images/rain.png";
            }
            if (data.weather[0].main == "Drizzle") {
                weatherImage.src = "images/drizzle.png";
            }
            if (data.weather[0].main == "Wind") {
                weatherImage.src = "images/wind.png";
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    }
}
btn.addEventListener("click", () => {
    checkWeather(city.value);
})
