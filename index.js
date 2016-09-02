var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html'); 
  //res.send(index);
});

app.listen(3000, function () {
  console.log('corriendo en el puerto 3000');
});