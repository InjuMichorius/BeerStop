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
