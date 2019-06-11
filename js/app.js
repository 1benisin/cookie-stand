
'use strict';

var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



// ----- Objects -----

var firstAndPike = {
  name: '1st and Pike',
  minMax: [23, 65],
  avgCookiesPerCustomer: 6.3,
  cookiesArrray: [],

  populateCookieData: function () {
    for (var i = 0; i < hoursArray.length; i++) {
      this.cookiesArrray[i] = Math.floor(getRandomIntInclusive(this.minMax[0], this.minMax[1]) * this.avgCookiesPerCustomer);
    }
  }
};


var seatacAirport = {
  name: 'Seatac Airport',
  minMax: [3, 24],
  avgCookiesPerCustomer: 1.2,
  cookiesArrray: [],

  populateCookieData: function () {
    for (var i = 0; i < hoursArray.length; i++) {
      this.cookiesArrray[i] = Math.floor(getRandomIntInclusive(this.minMax[0], this.minMax[1]) * this.avgCookiesPerCustomer);
    }
  }
};

var seattleCenter = {
  name: 'Seattle Center',
  minMax: [11, 38],
  avgCookiesPerCustomer: 3.7,
  cookiesArrray: [],

  populateCookieData: function () {
    for (var i = 0; i < hoursArray.length; i++) {
      this.cookiesArrray[i] = Math.floor(getRandomIntInclusive(this.minMax[0], this.minMax[1]) * this.avgCookiesPerCustomer);
    }
  }
};

var capitalHill = {
  name: 'Capital Hill',
  minMax: [20, 38],
  avgCookiesPerCustomer: 2.3,
  cookiesArrray: [],

  populateCookieData: function () {
    for (var i = 0; i < hoursArray.length; i++) {
      this.cookiesArrray[i] = Math.floor(getRandomIntInclusive(this.minMax[0], this.minMax[1]) * this.avgCookiesPerCustomer);
    }
  }
};

var alki = {
  name: 'Alki',
  minMax: [2, 16],
  avgCookiesPerCustomer: 4.6,
  cookiesArrray: [],

  populateCookieData: function () {
    for (var i = 0; i < hoursArray.length; i++) {
      this.cookiesArrray[i] = Math.floor(getRandomIntInclusive(this.minMax[0], this.minMax[1]) * this.avgCookiesPerCustomer);
    }
  }
};


// ----- Functions -----

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sumArray(arr) {
  var total = arr[0];
  for (var i = 1; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}


function renderStoreData(store) {
  store.populateCookieData();
  var mainDiv = document.getElementById('main');
  var storeDiv = document.createElement('div');
  var storeName = document.createElement('h2');
  storeName.textContent = store.name;
  var uList = document.createElement('ul');

  storeDiv.appendChild(storeName);
  storeDiv.appendChild(uList);
  mainDiv.appendChild(storeDiv);

  for (var i = 0; i < hoursArray.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = `${hoursArray[i]}: ${store.cookiesArrray[i]} cookies`;
    uList.appendChild(listItem);
  }

  var sumItem = document.createElement('li');
  sumItem.textContent = `Total: ${sumArray(store.cookiesArrray)} cookies`;
  uList.appendChild(sumItem);
}

function renderAll() {
  renderStoreData(firstAndPike);
  renderStoreData(seatacAirport);
  renderStoreData(seattleCenter);
  renderStoreData(capitalHill);
  renderStoreData(alki);
}

renderAll();




