// Dependencies
var express = require("express");
var morgan = require("morgan");
var path = require("path");

var app = express();

// Settings
// Initial port
var PORT = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
// Morgan as logger
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
    res.render('ENG/index')
});

app.get('/about', (req, res) => {
    res.render('ENG/about')
});

app.get('/services', (req, res) =>{
    res.render('ENG/services')
});

app.get('/inicio', (req,res) => {
    res.render('SPA/index')
});


// Statics files
app.use(express.static(path.join(__dirname, 'public')));

// Start server listening requests
app.listen(PORT, () => {
    console.log("Server listening on: http://localhost: " + PORT);
});