
'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


// ----- Object Costructor -----

function Store(name, min, max, avgCookies) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.cookieArray = [];
  this.populateCookieData();
  Store.storeList.push(this);
}
Store.storeList = [];

Store.prototype.populateCookieData = function () {
  for (var i = 0; i < hours.length; i++) {
    this.cookieArray[i] = Math.round(getRandomIntInclusive(this.min, this.max) * this.avgCookies);
  }
};

Store.prototype.renderData = function () {

  var tempRow = [];
  tempRow.push(this.name);
  for (var i = 0; i < this.cookieArray.length; i++) {
    tempRow.push(this.cookieArray[i]);
  }
  tempRow.push(sumArray(this.cookieArray));

  // create variables
  var tableBody = document.getElementById('tableBody');
  var tableRow = document.createElement('tr');

  // add store data to row
  for (var t = 0; t < tempRow.length; t++) {
    var tableCell = document.createElement('td');
    tableCell.textContent = tempRow[t];
    tableRow.appendChild(tableCell);
  }

  // add row to table body
  tableBody.appendChild(tableRow);
};


// ----- Create Stores -----

new Store('1st and Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capital Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);


// ----- Render Store Data (also populates data) -----

function renderSalesTable() {

  renderTableHead();
  renderTableBody();
  renderTableFoot();

}

function renderTableHead() {
  var tempRow = [];
  tempRow.push('');
  for (var i = 0; i < hours.length; i++) {
    tempRow.push(hours[i]);
  }
  tempRow.push('Daily Location Total');

  var tableHead = document.getElementById('tableHead');
  var tableRow = document.createElement('tr');

  for (var j = 0; j < tempRow.length; j++) {
    var hCell = document.createElement('th');
    hCell.textContent = tempRow[j];
    tableRow.appendChild(hCell);
  }

  tableHead.appendChild(tableRow);
}

function renderTableBody() {
  for (let i = 0; i < Store.storeList.length; i++) {
    Store.storeList[i].renderData();
  }
}

function renderTableFoot() {
  // add up all the totals
  var totals = new Array(hours.length + 1).fill(0);
  for (var i = 0; i < Store.storeList.length; i++) {
    for (var j = 0; j < Store.storeList[i].cookieArray.length; j++) {
      totals[j] += Store.storeList[i].cookieArray[j];
    }
    totals[15] += sumArray(Store.storeList[i].cookieArray);
  }
  totals.splice(0, 0, 'Totals');

  var tableFoot = document.getElementById('tableFoot');
  var tableRow = document.createElement('tr');

  for (var m = 0; m < totals.length; m++) {
    var fCell = document.createElement('td');
    fCell.textContent = totals[m];
    tableRow.appendChild(fCell);
  }
  tableFoot.removeChild(tableFoot.firstChild);
  tableFoot.appendChild(tableRow);
}


renderSalesTable();


// ----- Helper Functions -----

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


// ----- Form -----

// get form data
// create new store




var form = document.getElementById('storeForm');

form.addEventListener('submit', function (e) {
  event.preventDefault();
  new Store(e.target.formName.value, e.target.formMin.value, e.target.formMax.value, e.target.formAvgCookies.value);
  Store.storeList[Store.storeList.length - 1].renderData();
  renderTableFoot();
});


// test
// console.log('cookiedata');
// console.log(Store.storeList);
