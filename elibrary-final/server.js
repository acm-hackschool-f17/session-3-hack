// Loads the library express which makes creating a server easy in a node application
var express = require('express');
var bodyParser = require('body-parser');

// Instantiate the "app" to start creating server endpoints
var app = express();
var books = initBooks();

// expose all files in public/ to be accessible from the root of our website
app.use(express.static('public'));

// POST form data is "url-encoded", so decode that into JSON for us
app.use(bodyParser.urlencoded());

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
app.get('/error', function (req, res) {
	res.send('The book is invalid.');
});

app.get('/library', function (req, res) {
	res.render('library', {
		books: books
	});
});

/**
 * Define the route to add a book to the library. We are posted the title, author, isbn,
 * and number of copies. The <a> || <b> syntax is for validity checking: it picks <a> if a
 * is "valid", aka defined and non-empty/non-null, otherwise it picks <b>.
 * 
 * If the inputs are valid, create a new book objects and push it into the array
 *  Redirect to the library (to re-render the page)
 * If the inputs are not valid, render the library template by passing in an object
 * with field "addFormBox" (which is another object) that details what to display on the page.
 *  show: true means show the add box. message: true means we have a message to send.
 *  messageText is the text of the message we want to display. messageSuccess: false means to
 *  display the message as a failure (unable to add the book). Finally, formInfo is another
 *  object that the library template can read to re-fill in the input that was send to the 
 *  server to show exactly what was invalid, and also so the user doesn't have to retype it.'
 */
app.post('/books/add', function(req, res) {
	let title = req.body.title || "";
	let author = req.body.author || "";
	let isbn = req.body.isbn || "";
	let copies = parseInt(req.body.copies) || 0;
	
	if (title.length > 0 && author.length > 0 && isbn.length > 0 && copies > 0) {
		books.push({title, author, isbn, copies});
		res.redirect('/library');
	} else {
		console.log("You tried to add an invalid book into the elibrary.");
		res.redirect('/error');
	}
});

/**
 * Delete a book by its ISBN. We defined a variable in our route, and express puts its
 * into req.params.isbn, since we named the variable `isbn` in the route path.
 * We loop through the list of books to find the index of the one with an ISBN of the
 * give one, and once we do, we remove it (see Array.splice, MDN), and stop checking, 
 * to immediately refresh the library.
 */
app.get('/books/delete/:isbn', function(req, res) {
	var isbn = req.params.isbn || 0;
	for (let i = 0; i < books.length; i++) {
		if (books[i].isbn === isbn) {
			books.splice(i, 1);
			break;
		}
	}

	res.redirect('/library');
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