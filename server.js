var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'oneWJ'
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleWJ', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'oneWJ.html'));
});

app.get('/article2WJ', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'twoWJ.html'));
});

app.get('/article3WJ', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
