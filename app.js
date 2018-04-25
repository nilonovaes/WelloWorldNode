var http = require('http');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("HelloWorld");
});

app.listen(3000, function () {
    console.log("Server rurning")
});

// var express = require('./config/express');
// var app = require('./config/express')();

// var roldanasRoutes = require('./app/routes/roldanas')(app);

// app.listen(3000, function () {
//     console.log('started');
// })