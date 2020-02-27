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





