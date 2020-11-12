let express = require('express');

let app = express();
app.use('/public', express.static('public'));

app.get('/', function(req, res) {
    res.render("index.ejs");
});

app.get('/sport/', function(req, res) {
    res.render("sport.ejs");
});

app.get('/sport/:sport/', function(req, res) {
    let sport = req.params.sport
    let json = require(`./data/${sport}.json`)
    let tricks = json[`${sport}`]
    moduleSport = require("./src/sport");
    trick = moduleSport.getRandomTricks(tricks)

    res.render("sport.ejs", {sport: sport, tricks: trick})
})

app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable');
});

app.listen(process.env.PORT || 8080);