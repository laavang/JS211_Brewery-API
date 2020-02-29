(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
    "API_KEY": "47bbe21296086059b3f75614d69d14ae"
}
},{}],2:[function(require,module,exports){

let API_KEY;
let localBreweries;


const findBreweries = () => {
  navigator.geolocation.getCurrentPosition(function(position) {

  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  console.log(latitude, longitude);
  fetchBreweries(latitude, longitude);
});
}



const fetchBreweries = (latitude, longitude) => {

fetch('https://sandbox-api.brewerydb.com/v2/search/geo/point/?lat='+latitude+'&lng='+longitude+'&r=25&key='+API_KEY)


.then((response) => {
  return response.json();
})
.then((myJson) => {
  localBreweries = myJson.data;
  console.log(localBreweries);
  displayBreweries(localBreweries);
})
};

displayBreweries = (localBreweries) => {

  localBreweries.forEach(entry => {

    const breweries = document.getElementById("breweries")
    const brewery = document.createElement("div");
    const breweryDetails = document.createElement("ul");
    
    const breweryName = document.createElement("h2");
    breweryName.appendChild(document.createTextNode(entry.name));

    const breweryAddress = document.createElement("li");
    breweryAddress.appendChild(document.createTextNode(entry.streetAddress+', '+entry.locality+', '+entry.region));
    const breweryPhone = document.createElement("li");
    breweryPhone.appendChild(document.createTextNode(entry.phone));
    const breweryWebsite = document.createElement("li");
    breweryWebsite.appendChild(document.createTextNode(entry.website));
    const breweryHours = document.createElement("li");
    breweryHours.appendChild(document.createTextNode(entry.hoursOfOperation));

    breweries.appendChild(brewery);
    brewery.appendChild(breweryName);
    brewery.appendChild(breweryDetails);
    breweryDetails.appendChild(breweryAddress);
    breweryDetails.appendChild(breweryPhone);
    breweryDetails.appendChild(breweryWebsite);
    breweryDetails.appendChild(breweryHours);

  });
}


window.onload = (e) => {

  const apiKeyVault = require('./api.json');
  console.log(apiKeyVault.API_KEY);
  API_KEY = apiKeyVault.API_KEY;
  findBreweries();

};







},{"./api.json":1}]},{},[2]);
