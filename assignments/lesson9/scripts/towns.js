//connection to the api
var towns = JSON.parse(getjson('https://byui-cit230.github.io/weather/data/towndata.json'));

document.getElementById("motto").innerHTML = towns[0].motto;
document.getElementById("yearFounded").innerHTML = towns[0].yearFounded;
document.getElementById("currenPopulation").innerHTML = towns[0].currentPopulation;
document.getElementById("averageRainfall").innerHTML = towns[0].averageRainfall;
document.getElementById("events1a").innerHTML = towns[0].events[0];
document.getElementById("events2a").innerHTML = towns[0].events[1];
document.getElementById("events3a").innerHTML = towns[0].events[2];

document.getElementById("motto1").innerHTML = towns[1].motto;
document.getElementById("yearFounded1").innerHTML = towns[1].yearFounded;
document.getElementById("currenPopulation1").innerHTML = towns[1].currentPopulation;
document.getElementById("averageRainfall1").innerHTML = towns[1].averageRainfall;
document.getElementById("events1b").innerHTML = towns[1].events[0];
document.getElementById("events2b").innerHTML = towns[1].events[1];
document.getElementById("events3b").innerHTML = towns[1].events[2];
document.getElementById("events4b").innerHTML = towns[1].events[3];

document.getElementById("motto2").innerHTML = towns[3].motto;
document.getElementById("yearFounded2").innerHTML = towns[3].yearFounded;
document.getElementById("currenPopulation2").innerHTML = towns[3].currentPopulation;
document.getElementById("averageRainfall2").innerHTML = towns[3].averageRainfall;
document.getElementById("events1c").innerHTML = towns[3].events[0];
document.getElementById("events2c").innerHTML = towns[3].events[1];
document.getElementById("events3c").innerHTML = towns[3].events[2];


function getjson(webAddress) {
    var data = new XMLHttpRequest();
    data.open("GET", webAdress, false);
    data.send(null);
    return data.responseText;
}
