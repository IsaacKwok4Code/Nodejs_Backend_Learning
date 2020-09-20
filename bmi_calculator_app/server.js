const express = require("express");
const bodyParser = require("body-Parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/calculator.html');
});
app.get('/contact', (req, res) => res.send('<h1>contact!</h1>'));
app.get('/hobby', (req, res) => res.send('<h1>hobby!</h1>'));
app.post('/calculator', (req, res) => {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight/(height*height);
    res.send('Your BMI is  '+ bmi);
});

app.listen(3000, () => console.log('app is running in 3000'))