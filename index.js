var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.set("view engine","ejs");  


app.get('/demo', function(req, res) {  
	res.render('normal');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});