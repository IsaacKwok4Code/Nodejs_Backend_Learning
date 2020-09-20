const express = require("express");
const bodyParser = require("body-Parser");
const https = require('https');

const app = express();

app.get('/', (req, res) => {
    const city = 'London';
    const apiKey = 'ff7e40d15061a94d26c283c40352963e';
    const url ='https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid='+ apiKey;
    https.get(url, (res) => {
        //res.statusCode check status example:200
        console.log(res.statusCode);
        res.on('data', (data) =>{
            const weatherData = JSON.parse(data);
            //console.log(weatherData);
            const temp = weatherData.main.feels_like;
            const weatherDesc = weatherData.weather[0].description;
            console.log(temp + ' ' + weatherDesc);
        })
        
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});



app.listen(3000, () => console.log('app is running in 3000'))
