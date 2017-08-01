const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public')
const PORT = process.env.PORT || 3000

var app = express()
var server = http.createServer(app)
var io = socketIO().listen(server)

app.use(express.static(publicPath))

io.on('connection', socket => {
  console.log('New user connected')

  socket.on('disconnect', () => {
    console.log('User was disconnected from server')
  })
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
