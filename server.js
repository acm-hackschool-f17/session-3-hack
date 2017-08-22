// Loads the library express which makes creating a server easy in a node application
var express = require('express');

// Instantiate the "app" to start creating server endpoints
var app = express();

// expose all files in public/ to be accessible from the root of our website
app.use(express.static('public'));

// Set up where our application will look for client-side files (HTML, CSS, JS)
app.set('view engine', 'hbs');

// Server listens to port 3000
app.listen(3000, function () {
	console.log('Your app is listening on port 3000!');
});

// Root web app endpoint
app.get('/', function (req, res) {
	// res.send('Hello World!');
	res.render('home', {
		title: "Title from Server",
		content: "This is a sentence sent from the server."
	});
});

// Set up another endpoint at /ucla
app.get('/ucla', function (req, res) {
	res.send('UCLA is gr8!');
});

app.get('/library', function (req, res) {
	var initialBooks = initBooks();
	res.render('library', {
		books: initialBooks
	});
});

//////////////////////////////////////////////////////
// Helper Functions:                                //
// Functions after this point have been defined     //
// for you. You can see how they work, but put      //
// all code above this point, and don't modify      //
// or play around with it during the session. You   //
// are free to do that later, though!               //
//////////////////////////////////////////////////////

function initBooks() {
	var initialBooks = [
		{ 
			title: "The Three Musketeers", 
			author: "Alexandre Dumas", 
			copies: 7, 
			isbn: "978-1-56619-909-4" 
		},
		{ title: "Ivanhoe", author: "Sir Walter Scott", copies: 2, isbn: "978-1-46110-482-3" },
		{ title: "The Count of Monte Cristo", author: "Alexandre Dumas", copies: 3, isbn: "978-1-39912-897-1" },
		{ title: "Last of the Mohicans", author: "James Fenimore Cooper", copies: 2, isbn: "978-1-87140-981-4" },
		{ title: "Moby Dick", author: "Herman Melville", copies: 8, isbn: "978-1-09713-891-7" },
		{ title: "A Tale of Two Cities", author: "Charles Dickens", copies: 14, isbn: "978-1-67819-414-4" },
		{ title: "Robin Hood", author: "Howard Pyle", copies: 1, isbn: "978-1-18904-912-4" },
		{ title: "Arabian Nights", author: "Antony Galland", copies: 6, isbn: "978-1-89231-991-4" }
	];

	return initialBooks;
}