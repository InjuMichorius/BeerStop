document.getElementById('start-game').addEventListener('click', startGame)

function startGame() {
    const body = document.querySelector("body")
    body.insertAdjacentHTML("afterend", "<h1>Red or black?",
    "<button>Red</button>", "<button>Black</button>"
)}

console.log('Hello world!')