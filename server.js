const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)
const port = process.env.PORT || 3000

app.use(express.static(path.resolve('public')))

io.on('connection', (socket) => {
  console.log('New user connected')

  socket.on('message', (message) => {
    if (message === 'snorkel') {
        io.emit('message', "User guessed the word correctly!")
    } else {
        io.emit('message', message)
    }
  })

  socket.broadcast.emit('message', 'A user has joined the chat')

  socket.on('disconnect', () => {
    console.log('user disconnected')
    io.emit('message', "A user has left the chat")
  })
})

http.listen(port, () => {
  console.log('listening on port ', port)
})