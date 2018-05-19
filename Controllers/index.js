const request = require('request');

module.exports = function(app) {
    app.get('/', (req, res) => {
        const url = 'https://itunes.apple.com/us/rss/topmovies/limit=25/json'

        const movies = request(url, function(err, response, body){
            if(!err){
                res.render('home', {movies: JSON.parse(body).feed.entry})
            }
            else{
                res.send("Error")
            }
        })

    });


}
