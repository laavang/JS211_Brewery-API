(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
    "API_KEY": "47bbe21296086059b3f75614d69d14ae"
}
},{}],2:[function(require,module,exports){
window.onload = (e) => {

  const apiKeyVault = require('./api.json');

  console.log(apiKeyVault.API_KEY);

  navigator.geolocation.getCurrentPosition(function(position) {

    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(latitude, longitude);
  }
  );


  fetch('https://sandbox-api.brewerydb.com/v2/search/geo/point/?lat='+latitude+'lng='+longitude+'key='+apiKeyVault.API_KEY)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });

  
};






},{"./api.json":1}]},{},[2]);
