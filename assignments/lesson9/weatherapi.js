//connection to the api
var weatherRequest = new XMLHttpRequest();

var apiURL="http://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=083564803af7abcd205ad149b46ed4ab";

weatherRequest.open("Get", apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
        var weatherData = JSON.parse(weatherRequest.responseText);
        //console.log(weatherData);
        document.getElementById("current-temp").innerHTML = weatherData.main.temp;
        document.getElementById("wdescription").innerHTML = weatherData.weather.description;
        document.getElementById("windspeed").innerHTML = weatherData.wind.speed;
        var imagesrc ="http//openweathermap.org/img/w/" + weatherdata.weather(0).icon + "png";
        document.getElementById("weatherimage").src = imagesrc;
}



        ////////
        //example using query selector to build in blank section

        //let weatherSection = document.querySelector('');
