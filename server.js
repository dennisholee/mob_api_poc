var express = require('express');
var app = express();
var route = express.Route();
var cors = require('cors');
var myroute = require('./routes/route');

port = process.env.PORT || 3000;

app.use(cors());
myroute(app);

app.use(cors());
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
