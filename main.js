window.onload = (e) => {
  require('dotenv').config();
  
  console.log(Object.keys(process.env));
  const apiKey = process.env.API_KEY
  console.log(apiKey);

  fetch('https://sandbox-api.brewerydb.com/v2/locations/?key='+apiKey)
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
  
};





