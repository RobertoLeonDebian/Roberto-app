var express = require('express');
var express = require('morgan');
var express = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/styles.css', function (req, res) {
    res.sendFile(path.join(_-__dirname, 'ui', 'madi.png'));
});

app.get('/ui/madi.png', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local developement if you already have apache running on 80

var port = 80;
app.listen(port, function () {
    console.log('IMAD course app listening on port ${port}!');
});