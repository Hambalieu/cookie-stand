'use strict';

//console.log('helo world');

let section = document.getElementById('seattle');
//console.log(section);

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerSale: 6.3,
  cookiesSalesPerHour: [],
  dailyTotal: 0,
  custPerHour: function(){
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  },
  avgSalesPerHour: function () {
    return Math.ceil(this.avgCookiesPerSale * this.custPerHour());
  },
  calcCookieSalesPerHour: function() {
    for (let i = 0; i < hours.length; i++){
      let cookies = this.avgSalesPerHour();
      this.cookiesSalesPerHour.push(cookies);
      this.dailyTotal += cookies;
    }
  }
};
seattle.calcCookieSalesPerHour();


seattle.render = function(){


  let article = document.createElement('article');
  section.appendChild(article);
  let h2 = document.createElement('h2');
  h2.textContent = 'Seattle';
  article.appendChild(h2);

  let ul = document.createElement('ul');
  article.appendChild(ul);

  for (let i = 0; i < seattle.cookiesSalesPerHour.length; i++){

    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${seattle.cookiesSalesPerHour[i]} cookies`;
    ul.appendChild(li);
  }

  let li = document.createElement('li');
  li.textContent = `Total: ${seattle.dailyTotal}`;
  ul.appendChild(li);
};

seattle.render ();


let tokyo = {
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerSale: 1.2,
  cookiesSalesPerHour: [],
  dailyTotal: 0,
  custPerHour: function(){
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  },
  avgSalesPerHour: function () {
    return Math.ceil(this.avgCookiesPerSale * this.custPerHour());
  },
  calcCookieSalesPerHour: function() {
    for (let i = 0; i < hours.length; i++){
      let cookies = this.avgSalesPerHour();
      this.cookiesSalesPerHour.push(cookies);
      this.dailyTotal += cookies;
    }
  }
};
//console.log(tokyo.cookiesSalesPerHour);
tokyo.calcCookieSalesPerHour();


tokyo.render = function(){


  let article = document.createElement('article');
  section.appendChild(article);
  let h2 = document.createElement('h2');
  h2.textContent = 'Tokyo';
  article.appendChild(h2);

  let ul = document.createElement('ul');
  article.appendChild(ul);

  for (let i = 0; i < tokyo.cookiesSalesPerHour.length; i++){

    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${tokyo.cookiesSalesPerHour[i]} cookies`;
    ul.appendChild(li);
  }

  let li = document.createElement('li');
  li.textContent = `Total: ${tokyo.dailyTotal}`;
  ul.appendChild(li);
};

tokyo.render ();



let dubai = {
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerSale: 3.7,
  cookiesSalesPerHour: [],
  dailyTotal: 0,
  custPerHour: function(){
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  },
  avgSalesPerHour: function () {
    return Math.ceil(this.avgCookiesPerSale * this.custPerHour());
  },
  calcCookieSalesPerHour: function() {
    for (let i = 0; i < hours.length; i++){
      let cookies = this.avgSalesPerHour();
      this.cookiesSalesPerHour.push(cookies);
      this.dailyTotal += cookies;
    }
  }
};
//console.log(dubai.cookiesSalesPerHour);
dubai.calcCookieSalesPerHour();


dubai.render = function(){


  let article = document.createElement('article');
  section.appendChild(article);
  let h2 = document.createElement('h2');
  h2.textContent = 'Dubai';
  article.appendChild(h2);

  let ul = document.createElement('ul');
  article.appendChild(ul);

  for (let i = 0; i < dubai.cookiesSalesPerHour.length; i++){

    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${dubai.cookiesSalesPerHour[i]} cookies`;
    ul.appendChild(li);
  }

  let li = document.createElement('li');
  li.textContent = `Total: ${ dubai.dailyTotal}`;
  ul.appendChild(li);
};

dubai.render ();




let paris = {
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerSale: 2.3,
  cookiesSalesPerHour: [],
  dailyTotal: 0,
  custPerHour: function(){
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  },
  avgSalesPerHour: function () {
    return Math.ceil(this.avgCookiesPerSale * this.custPerHour());
  },
  calcCookieSalesPerHour: function() {
    for (let i = 0; i < hours.length; i++){
      let cookies = this.avgSalesPerHour();
      this.cookiesSalesPerHour.push(cookies);
      this.dailyTotal += cookies;
    }
  }
};
//console.log(paris.cookiesSalesPerHour);
paris.calcCookieSalesPerHour();


paris.render = function(){


  let article = document.createElement('article');
  section.appendChild(article);
  let h2 = document.createElement('h2');
  h2.textContent = 'Paris';
  article.appendChild(h2);

  let ul = document.createElement('ul');
  article.appendChild(ul);

  for (let i = 0; i < paris.cookiesSalesPerHour.length; i++){

    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${paris.cookiesSalesPerHour[i]} cookies`;
    ul.appendChild(li);
  }

  let li = document.createElement('li');
  li.textContent = `Total: ${ paris.dailyTotal}`;
  ul.appendChild(li);
};

paris.render ();



let lima = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerSale: 4.6,
  cookiesSalesPerHour: [],
  dailyTotal: 0,
  custPerHour: function(){
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  },
  avgSalesPerHour: function () {
    return Math.ceil(this.avgCookiesPerSale * this.custPerHour());
  },
  calcCookieSalesPerHour: function() {
    for (let i = 0; i < hours.length; i++){
      let cookies = this.avgSalesPerHour();
      this.cookiesSalesPerHour.push(cookies);
      this.dailyTotal += cookies;
    }
  }
};
//console.log(lima.cookiesSalesPerHour);
lima.calcCookieSalesPerHour();


lima.render = function(){


  let article = document.createElement('article');
  section.appendChild(article);
  let h2 = document.createElement('h2');
  h2.textContent = 'Lima';
  article.appendChild(h2);

  let ul = document.createElement('ul');
  article.appendChild(ul);

  for (let i = 0; i < lima.cookiesSalesPerHour.length; i++){

    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${lima.cookiesSalesPerHour[i]} cookies`;
    ul.appendChild(li);
  }

  let li = document.createElement('li');
  li.textContent = `Total: ${ lima.dailyTotal}`;
  ul.appendChild(li);
};

lima.render ();
