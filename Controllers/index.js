const request = require('request');

module.exports = function(app) {
    app.get('/', (req, res) => {
        // We're grabbing data from this url
        const url = 'https://itunes.apple.com/us/rss/topmovies/limit=25/json'

        // We're using the 'request' library to grab data from the URL above,
        // Then we're throwing it into the html page to display
        request(url, function(err, response, body){
            // If we get a success status, then we render
            if(!err && response.statusCode == '200'){
                // Remember the variable 'movies' when you check the html
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

        // Same as the first, but with something different; we're using a parameter
        // This parameter SHOULD have the movie's index in the top 25 movies!
        // However, what happens if you put something invalid like the 26th movie?
        request(url, function(err, response, body){
            // If we get a success status, then we render the index of the movie
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
