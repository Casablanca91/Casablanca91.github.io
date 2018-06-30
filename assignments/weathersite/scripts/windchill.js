var high = document.getElementById("high").innerHTML;
var low = document.getElementById("low").innerHTML;
var Hhigh = parseInt(high);
var Llow = parseInt(low);
var tempF = (Hhigh + Llow) / 2;
var speed = document.getElementById("windspeed").innerHTML;
var s = Math.pow(speed, 0.16);
var windChill = 35.74 + (0.6215 * tempF) - (35.75 * s) + (0.4275 * (tempF * s));

document.getElementById("windchill").innerHTML = windChill.toFixed(2);



