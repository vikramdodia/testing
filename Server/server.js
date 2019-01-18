var express = require('express');
var app = express();




app.get('/User', function (req, res) {
	console.log("YAsh");

  res.send('Get User');
 })



app.post('/User', function(req, res){
	console.log("YAsh");
  	res.send("Post User");
  })

app.put('/User', function(req, res)
  {
  	res.send("put User");
  })

app.delete('/User', function(req, res)
  {
  	res.send("delete User");
  })

app.listen(4000);