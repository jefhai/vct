const express = require('express')
const app = express()
const server = require('http').createServer(app)
const socketio = require('socket.io').listen(server)

connections = []

server.listen(3000, "0.0.0.0", function () {
  console.log('Server running... http://localhost:3000')
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

socketio.on('connection', function(socket) {
	connections.push(socket)
	console.log("Connected: %s connections", connections.length)

	socket.on('disconnect', function(data) {
		connections.splice(connections.indexOf(socket), 1);
		console.log("Disconnected: %s connections", connections.length)
	})

	socket.on('send message', function(data) {
		console.log("Data: " + data);
		socket.broadcast.emit('new message', data)
	})
})
