var express = require('express');
var app = express();

app.get('/hello', function(req, res) {
  res.send("World");
});

app.get('/time', function(req, res) {
  var time = new Date();
  res.send(time);
})

app.listen(8000, () => {
  console.log("listening on port 8000");
});