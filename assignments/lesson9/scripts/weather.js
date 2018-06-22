//connection to the api
var header = document.querySelector('header');
        var section = document.querySelector('section');

        ar requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

cityRequest.onload = function () {
        var cityData ={
            var towns = request.response;
            populateHeader(name);
            showmotto(motto);
        }

         function populateHeader(jsonObj) {
            var myH1 = document.createElement('h1');
            myH1.textContent = jsonObj['name'];
            header.appendChild(myH1);

            var myPara = document.createElement('p');
            myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
            header.appendChild(myPara);
        }

    
}