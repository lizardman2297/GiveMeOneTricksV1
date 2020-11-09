var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil');
});

app.get('/sport/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('selectionne ton sport');
});

app.get('/sport/bmx/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('je te donne un tricks en BMX');
});

app.get('/sport/parkour/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('je te donne un tricks en Parkour');
});

app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable');
});

app.listen(process.env.PORT | 8080);