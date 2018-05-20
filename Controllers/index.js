const request = require('request');

module.exports = function(app) {
    app.get('/', (req, res) => {
        const url = 'https://itunes.apple.com/us/rss/topmovies/limit=25/json'

        // We're using the 'request' library to grab data from this API
        request(url, function(err, response, body){
            // If we get a success status, then we render
            if(!err && response.statusCode == '200'){
                res.render('home', {movies: JSON.parse(body).feed.entry})
            }
            // Otherwise, we'll send an error
            else{
                res.send(err)
            }
        })
    });

    app.get('/movie/:id', (req, res) => {
        const url = 'https://itunes.apple.com/us/rss/topmovies/limit=25/json'
        const movie = req.params.id
        // Same as the first, but with something different
        request(url, function(err, response, body){
            // If we get a success status, then we render
            if(!err && response.statusCode == '200'){
                res.render('movie', {movie: JSON.parse(body).feed.entry[movie]})
            }
            // Otherwise, we'll send an error
            else{
                res.send(err)
            }
        })
    })
}
