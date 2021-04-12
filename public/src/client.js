document.getElementById('start-game').addEventListener('click', startGame)

function startGame() {
    const body = document.querySelector("body")
    body.innerHTML = ""
    body.insertAdjacentHTML("afterend", "<span>Username</span><h1>Red or black?<img src='./img/user.png' alt='User profile'><button>Red</button><button>Black</button>"
)}

console.log('Hello world!')