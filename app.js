const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');
const local_strategy = require('passport-local').Strategy;
const server = require('http').createServer(app);
const socketio = require('socket.io').listen(server);
const redis = require('redis');
const redis_client = redis.createClient();
const pug = require('pug');

// Set Routes
const routes = require('./routes/index');
const users = require('./routes/users');
const gameboard = require('./routes/gameboard');

var socket_connections = [];

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Set Static Folder
app.use('/static', express.static(path.join(__dirname, 'public')));

// Passport Init
app.use(passport.initialize());
app.use(passport.session());

// Set Port
app.set('port', (process.env.PORT || 3000));
server.listen(app.get('port'), "0.0.0.0", function() {
	console.log('Server running... http://localhost:'+app.get('port'));
});

redis_client.on("error", function(err) {
	console.log("Error " + err);
});

socketio.on('connection', function(socket) {
	connections.push(socket);
	console.log("Connected: %s connections", connections.length);

	socket.on('disconnect', function(data) {
		connections.splice(connections.indexOf(socket), 1);
		console.log("Disconnected: %s connections", connections.length);
	});

	socket.on('send message', function(data) {
		console.log("Data: " + data);
		socket.broadcast.emit('new message', data);
	});
});

app.use('/', routes);
app.use('/', users);
app.use('/', gameboard);
