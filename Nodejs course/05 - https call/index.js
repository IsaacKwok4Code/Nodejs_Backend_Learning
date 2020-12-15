const request = require('request')

const url =
'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    console.log(response.body);
})

const geocodeURL =
'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1';
request({ url: geocodeURL, json: true }, (error, response) => {
 if (error) {
 console.log('Unable to connect to location services!')
 } else if (response.body.features.length === 0) {
 console.log('Unable to find location. Try another search.')
 } else {
 const latitude = response.body.features[0].center[0]
 const longitude = response.body.features[0].center[1]
 console.log(latitude, longitude)
 }
})