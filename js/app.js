'use strict';
//console.log('helo world');
let section = document.getElementById('seattle');
console.log(section);
let article = document.createElement('article');
section.appendChild(article);

let table = document.createElement('table');
article.appendChild(table);
let tfoot = document.createElement('tfoot');

let hours = [' 6:00am', ' 7:00am', ' 8:00am', ' 9:00am', '10:00am', '11:00am', '12:00pm', ' 1:00pm', ' 2:00pm', ' 3:00pm', ' 4:00pm', ' 5:00pm', ' 6:00pm', ' 7:00pm'];
let stores = [];

function StoreLocation(name, minCustPerHour, maxCustPerHour, avgCookiesPerSale) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookiesSalesPerHour = [];
  this.dailyTotal = 0;
  stores.push(this);
  this.render();
}

StoreLocation.prototype.custPerHour = function () {
  return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
};

StoreLocation.prototype.avgSalesPerHour = function () {
  return Math.ceil(this.avgCookiesPerSale * this.custPerHour());
};

StoreLocation.prototype.calcCookieSalesPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookies = this.avgSalesPerHour();
    this.cookiesSalesPerHour.push(cookies);
    this.dailyTotal += cookies;
  }
};

StoreLocation.prototype.render = function () {

  this.calcCookieSalesPerHour();

  let tr = document.createElement('tr');
  table.appendChild(tr);

  let th = document.createElement('th');
  //th.setAttribute('class', 'names');
  th.textContent = `${this.name}`;
  tr.appendChild(th);

  for (let i = 0; i < this.cookiesSalesPerHour.length; i++) {
    let td = document.createElement('td');
    td.textContent = `${this.cookiesSalesPerHour[i]}`;
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = `${this.dailyTotal}`;
  tr.appendChild(td);
};

new StoreLocation('Seattle', 23, 65, 6.3, [], 0);
new StoreLocation('Tokyo', 3, 24, 1.2, [], 0);
new StoreLocation('Dubai', 11, 38, 3.7, [], 0);
new StoreLocation('Paris', 20, 38, 2.3, [], 0);
new StoreLocation('Lima', 2, 16, 4.6, [], 0);



function tableHeader() {

  let thead = document.createElement('thead');
  table.appendChild(thead);

  let tr = document.createElement('tr');
  thead.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);
  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = `${hours[i]}`;
    tr.appendChild(th);
  }
  th = document.createElement('th');
  //th.setAttribute('class', 'dlt');
  th.textContent = 'Daily Location Total';
  tr.appendChild(th);
  //th.textContent = 'Stores';
  //tr.appendChild(th);
}
// function tableBody(stores) {
//   const table = document.getElementById('table');
//   const tr = document.createElement('tr');
//   table.appendChild(tr);
//   const td = document.createElement('td');
//   td.textContent = stores.name;
//   tr.appendChild(td);
//   for (let i = 0; i < stores.cookiesSalesPerHour.length; i++) {
//     let td = document.createElement('td');
//     td.textContent = `${stores.cookiesSalesPerHour[i]}`;
//     tr.appendChild(td);

//   }
//   let td1 = document.createElement('td');
//   td.textContent = `${stores.dailyTotal}`;
//   tr.appendChild(td1);
// }

// th = document.createElement('th');
// th.setAttribute('class', 'dlt');
// th.textContent = 'Daily Location Total';
// tr.appendChild(th);


// Location.prototype.render = function () {

//   this.calcCookieSalesPerHour();

//   let tr = document.createElement('tr');
//   table.appendChild(tr);

//   let th = document.createElement('th');
//   //th.setAttribute('class', 'names');
//   th.textContent = `${this.name}`;
//   tr.appendChild(th);

//   for (let i = 0; i < this.cookiesSalesPerHour.length; i++) {
//     let td = document.createElement('td');
//     td.textContent = `${this.cookiesSalesPerHour[i]}`;
//     tr.appendChild(td);
//   }
//   let td = document.createElement('td');
//   td.textContent = `${this.dailyTotal}`;
//   tr.appendChild(td);
// };

tableHeader();
// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();



//td = document.createElement('td');

function dailyTotal() {
  let dailyTotal = 0;
  let tr = document.createElement('tr');
  tfoot.appendChild(tr);
  table.appendChild(tfoot);
  let td = document.createElement('td');
  td.textContent = 'Totals per hour';
  tr.appendChild(td);
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    let hourlyTotals = 0;
    for (let x = 0; x < stores.length; x++) {
      hourlyTotals += stores[x].cookiesSalesPerHour[i];
    }
    dailyTotal += hourlyTotals;
    td.textContent = `${hourlyTotals}`;
    tr.appendChild(td);

  }
  td = document.createElement('td');
  td.textContent = `${dailyTotal}`;
  tr.appendChild(td);
}
dailyTotal();

//console.log(hourlyTotals);

// function renderAllStores() {
//   const table = document.getElementById('table');
//   table.innerHTML = '';
//   tableHeader();
//   for (let i = 0; i < stores.length; i++) {
//     tableBody(stores[i]);
//   }
//   dailyTotal();
// }



//////////////////////////////////////////////////////////


function submitHandler(event) {
  event.preventDefault();

  let name = event.target.location.value;
  let min = parseInt(event.target.min.value);
  let max = parseInt(event.target.max.value);
  let avg = parseFloat(event.target.avg.value);
  console.log(name,min,max,avg);
  new StoreLocation(name, min, max, avg);
  tfoot.innerHTML = '';
  dailyTotal();
  locationForm.reset();

}
let locationForm = document.getElementById('CookiesShopsForm'); //with html
locationForm.addEventListener('submit', submitHandler);
