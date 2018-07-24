var section = document.querySelector('section.tester');

var requestURL = 'https://api.myjson.com/bins/gco2i';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();



request.onload = function () {

    var tableData = request.response;

    showTable(tableData);

}



function showTable(jsonObj) {

    var services = jsonObj['services'];



    for (var i = 0; i < services.length; i++) {

            var myTable = document.createElement('table');


            var myth1 = document.createElement('th');


            var mytd1 = document.createElement('td');

            var mytd2 = document.createElement('td');

            var mytd3 = document.createElement('td');

            var mytd4 = document.createElement('td');
            var mytd5 = document.createElement('td');



            myth1.textContent = services[i].name;

            mytd1.textContent = services[i].service1;

            mytd2.textContent = services[i].service2;

            mytd3.textContent = services[i].service3;

            mytd4.textContent = services[i].service4;

            mytd5 = services[i].prices;


            myTable.appendChild(myth1);

            myTable.appendChild(mytd1);

            myTable.appendChild(mytd2);

            myTable.appendChild(mytd3);
            myTable.appendChild(mytd4);
           


            section.appendChild(myTable);


    }

}
