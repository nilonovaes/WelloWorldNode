var express = require('express');
var app = express();
var consign = require('consign');

app.set('view engine', 'ejs');
app.set('views', './app/views');


consign({
        cwd: 'app',
        extensions: ['.js', '.json', '.node'],
        verbose: false
    })
    .include('controller')
    .then('routes')
    .into(app);

module.exports = function () {
    return app;
}

//  aaa