var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.render("index.ejs");
});

app.get('/sport/', function(req, res) {
    res.render("sport.ejs");
});

app.get('/sport/bmx/', function(req, res) {
    var test = require("./data/bmx.json");
    var tricks = test["tricks BMX"];
    
    
    fun = require("./src/sport");
    trick = fun.getRandomTricks(tricks)

    
    res.render("sport/bmx.ejs", {tricks: trick});
});

app.get('/sport/parkour/', function(req, res) {
    var test = require("./data/parkour.json");
    var tricks = test["tricks Parkour"];
    
    
    fun = require("./src/sport");
    trick = fun.getRandomTricks(tricks)

    
    res.render("sport/parkour.ejs", {tricks: trick});
});

app.get('/sport/trot/', function(req, res) {
    var test = require("./data/trot.json");
    var tricks = test["tricks Trot"];
    
    
    fun = require("./src/sport");
    trick = fun.getRandomTricks(tricks)

    
    res.render("sport/trot.ejs", {tricks: trick});
});

app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable');
});

app.listen(process.env.PORT || 8080);