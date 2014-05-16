var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var _ = require('lodash/dist/lodash.underscore');

var app = express();

app.use(morgan());
app.use(bodyParser());
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log("On 3k");
