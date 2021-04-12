var socket = io()
var form = document.getElementById('account')
var username = document.getElementById('username')
var roomId = document.getElementById('room-id')

//Fire function when user sends message
form.addEventListener('submit', (event) => {
    localStorage.setItem("Username", username.value)
    localStorage.setItem("roomId", roomId.value)
    console.log(localStorage)
})

socket.on('message', function (message) {
    var element = document.createElement('li')
    element.textContent = message
    messages.appendChild(element)
    messages.scrollTop = messages.scrollHeight
})

function randomNumber(len) {
    var randomNumber;
    var n = '';

    for(let count = 0; count < len; count++) {
        randomNumber = Math.floor(Math.random() * 10);
        n += randomNumber.toString();
    }
    return n;
}

roomId.value = randomNumber(9);
