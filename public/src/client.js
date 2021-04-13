//Initializing socket
const socket = io()

//Creating variables
const roomName = document.getElementById('room-id')
const userList = document.getElementById('users')
const playerCount = document.getElementById('player-count')

//Get username and room id out of the URL
const { username, roomId} = Qs.parse(location.search, {
    ignoreQueryPrefix: true
})

//Join specific room
socket.emit('joinRoom', { username, roomId })

//Get room and users
socket.on('roomUsers', ({ roomId, users }) => {
    outputRoomName(roomId)
    outputUsers(users)
})

const body = document.querySelector('body')
document.getElementById('start-game').addEventListener('click', startGame)

let currentQuestion = "Black or red?"
let currentOptionOne = "Red"
let currentOptionTwo = "Black"

//User starts game
function startGame() {

    //Delete player room
    body.innerHTML = ""


    body.insertAdjacentHTML("afterend", `<p>Hello</p>`)
    console.log(username)
}

socket.on('message', message => {
    console.log(message)
})

//Add room name to DOM
function outputRoomName(roomId) {
    roomName.innerText = roomId
}

//Add users to DOM
function outputUsers(users) {
    console.log(users.length)
    playerCount.innerHTML = `${users.length}`
    userList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
    `
}

// insertAdjacentHTML("afterend", `<li><strong>${teamMember.username}</strong><ul class="stats"><li>Wins: ${teamMember.wins}</li><li>KD: ${teamMember.kd}</li></ul></li>}")<li><strong>${teamMember.username}</strong><ul class="stats"><li>Wins: ${teamMember.wins}</li><li>KD: ${teamMember.kd}</li></ul></li>}`