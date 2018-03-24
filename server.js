var connect  = require('connect');
var static = require('serve-static');

var server = connect();

server.use(static(__dirname + '/public'));
server.listen(9292);

var livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname + "/public");
