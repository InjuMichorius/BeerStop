const fetch = require('node-fetch')
const shuffledCards =  require('./public/src/api.js')
const deckId = shuffledCards()

//Get deck id from fetched deck
async function deck(req, res) {
  const json = await shuffledCards()
  const deckId = json.deck_id
  console.log(deckId)
}
deck()

//Function that draws one card
async function drawCard(req, res) {
  const drawnCard = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
}
drawCard()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)
const port = process.env.PORT || 3000

const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require("./utils/users")

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
  res.render('beerStop')
});

//Fires a function on user connection with the socket
io.on('connection', (socket) => {

  //Fires a function to specify username and roomId, by reading the URL
  socket.on('joinRoom', ({ username, roomId }) => {
    //Create user and join to specific room
    const user = userJoin(socket.id, username, roomId)
    socket.join(user.roomId)

    //Welcome current user
    socket.emit('message', 'Welcome to the hackerzone B)')

    //Shows when a user connects
    socket.broadcast.to(user.roomId).emit('message', `${user.username} has joined the chat`)

    //Send users and show room information
    io.to(user.roomId).emit('roomUsers', {
      roomId: user.roomId,
      users: getRoomUsers(user.roomId)
    })

  })

  socket.on('disconnect', () => {
    const user = userLeave(socket.id)

    //If user exist
    if (user) {
      io.to(user.roomId).emit('message', `${user.username} has left the chat`)

      //Send users and show room information
      io.to(user.roomId).emit('roomUsers', {
        roomId: user.roomId,
        users: getRoomUsers(user.roomId)
      })
    }

  })
})

//Our node app is live!
http.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})