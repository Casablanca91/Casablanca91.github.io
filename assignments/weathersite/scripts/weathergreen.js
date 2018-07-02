//connection to the api
var weatherRequest = new XMLHttpRequest();

var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4274994&units=imperial&APPID=083564803af7abcd205ad149b46ed4ab";

weatherRequest.open("Get", apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    //console.log(weatherData);
    document.getElementById("current-temp").innerHTML = weatherData.main.temp;
    document.getElementById("wdescription").innerHTML = weatherData.main.description;
    document.getElementById("windspeed").innerHTML = weatherData.wind.speed;
    var imagesrc = "https://openweathermap.org/img/w/" + weatherData.weather(0).icon + "png";
    document.getElementById("weatherimage").src = imagesrc;
}