const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)
const port = process.env.PORT || 3000

//Something with bodyparser
app.use(bodyParser.urlencoded({
  extended: true,
}));

//Set default path to public
app.use(express.static(path.resolve('public')))

//Templating engine
app.set('views', 'view')
app.set('view engine', 'ejs')

//Routes
app.get('/', (req, res) => {
  res.render('index')
});

app.get('/beerStop', (req, res) => {
  res.render('beerStop', {
    username: req.query.username,
    roomId: req.query.roomId
  })
});

app.get('/game', (req, res) => {
  res.render('game', {
    username: req.query.username,
    roomId: req.query.roomId
  })
});

//Fires a function on user connection with the socket
io.on('connection', (socket) => {
  
  console.log('New user connected')
  socket.emit('Message', 'Welcome to the hackerzone B)')
  socket.emit('Message', 'A user joined the console log')

  socket.on('disconnect', () => {
    console.log('user disconnected')
    io.emit('message', "A user has left the chat")
  })
})

//Our node app is live!
http.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})