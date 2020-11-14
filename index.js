let express = require('express')

let app = express()
app.use('/public', express.static('public'))

app.get('/', function(req, res) {
    res.render("index.ejs")
});

app.get('/sport/:sport/', function(req, res) {
    let sport = req.params.sport

    res.render("sport.ejs", {sport: sport})
})

app.get('/sport/:sport/:level', function(request, response) {
    let sport = request.params.sport
    let level = request.params.level
    let json = require(`./data/${sport}.json`)
    let tricks = json[`${sport}`]
    moduleSport = require("./src/sport")
    trick = moduleSport.getRandomTricks(tricks, level)

    let test = JSON.stringify(json)

    response.render("tricks.ejs", {sport: sport, trick: trick, level: level, tricksList: test})
})

app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain')
    res.status(404).send('Page introuvable')
})

app.listen(process.env.PORT || 8080)