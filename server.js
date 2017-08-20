// Loads the library express which makes creating a server easy in a node application
var express = require('express');

// Instantiate the "app" to start creating server endpoints
var app = express();

// Server listens to port 3000
app.listen(3000, function () {
	console.log('Your app is listening on port 3000!');
});

// Root web app endpoint
app.get('/', function (req, res) {
	res.send('Hello World!');
});

// Set up another endpoint at /ucla
app.get('/ucla', function (req, res) {
	res.send('UCLA is gr8!');
});