var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.render("index.ejs");
});

app.get('/sport/', function(req, res) {
    res.render("sport.ejs");
});

app.get('/sport/bmx/', function(req, res) {
    test = require("./src/bmx.js");
    let tricks = test.getRandomBmx();
    res.render("sport/bmx.ejs", {tricks: tricks});
});

app.get('/sport/parkour/', function(req, res) {
    test = require("./src/parkour.js");
    let tricks = test.getRandomParkour();
    res.render("sport/parkour.ejs", {tricks: tricks});
});

app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable');
});

app.listen(process.env.PORT || 8080);