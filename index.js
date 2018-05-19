// For this app, we're going to be using Node.js and Express
// It's an oft used combination of tools that help make sites rather easily.
const express = require('express')
const app = express()

// We are going to be using Handlebars as our templating engine
// Handlebars is something Ember.js uses, allowing us to pass
// in variables to html pages. We'll cover this later.
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Public folders are often used to store images, css, and the like.
app.use(express.static('public/'))

// For the sake of cleanliness, we'll put the 'Controllers' in a seperate file.
// Controllers allow us to route people to different areas depending on which
// URL address they access.
require('./Controllers')(app);

// This is the port listener
// This is where we would need to hit to access the application.
// This might be configured depending on site; Heroku, for instance,
// uses an '.env' named PORT. We'll discuss this when we start shipping to Heroku
app.listen(process.env.PORT || 5000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
