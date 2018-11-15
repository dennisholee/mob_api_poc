var express = require('express');
var  app = express();
var  route = express.Route();

port = process.env.PORT || 3000;

var myroute = require('./routes/route');
myroute(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
