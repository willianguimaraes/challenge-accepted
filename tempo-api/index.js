const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const port = 21021;
const app = express();

const locales = require('./dados/locales.json');
const weather = require('./dados/weather.json');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/locales', function(req, res) {
    res.send(locales);
});

app.get('/weathers/:idCity', function(req, res) {
    let { idCity } = req.params;


    weather.forEach( weather => {
        if (weather.locale.id == idCity) {
            res.send(weather);
        }
    })
});

app.listen(port , () => {
    console.log("Server Rodando: http://localhost:" + port )
});
