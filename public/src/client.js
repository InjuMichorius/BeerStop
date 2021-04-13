//Initializing socket
const socket = io()

//Get username and room id out of the URL
const { username, roomId} = Qs.parse(location.search, {
    ignoreQueryPrefix: true
})

//Join specific room
socket.emit('joinRoom', { username, roomId })

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

console.log('Hello world!')

// insertAdjacentHTML("afterend", `<li><strong>${teamMember.username}</strong><ul class="stats"><li>Wins: ${teamMember.wins}</li><li>KD: ${teamMember.kd}</li></ul></li>}")<li><strong>${teamMember.username}</strong><ul class="stats"><li>Wins: ${teamMember.wins}</li><li>KD: ${teamMember.kd}</li></ul></li>}`