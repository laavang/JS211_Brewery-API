const env = require('dotenv').config();

const result = dotenv.config();
 
if (result.error) {
  throw result.error
}

// console.log(result.parsed);
console.log(env);

// // const api = require('api')
// // api.connect({
// //   API_KEY: process.env.API_KEY
// // })



fetch('https://sandbox-api.brewerydb.com/v2/locations/?key='+API_KEY)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });



navigator.geolocation.getCurrentPosition(function(position) {

  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  console.log(latitude, longitude);
}
);

