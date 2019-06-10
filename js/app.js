
'use strict';

var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var firstAndPike = {
  name: '1st and Pike',
  minMax: [23, 65],
  avgCookiesPerCustomer: 6.3,
  cookiesArrray: [],

  populateCookieData: function () {
    console.log('random cusotmer per hour');
    for (var i = 0; i < hoursArray.length; i++) {
      this.cookiesArrray[i] = Math.floor(getRandomIntInclusive(this.minMax[0], this.minMax[1]) * this.avgCookiesPerCustomer);
    }
    console.log(this.cookiesArrray);
  }
};

firstAndPike.populateCookieData();


var seatacAirport = {

};

var seattleCenter = {

};

var capitalHill = {

};

var alki = {

};

