const socket = io()

const body = document.querySelector('body')
document.getElementById('start-game').addEventListener('click', startGame)

let currentQuestion = "Black or red?"
let currentOptionOne = "Red"
let currentOptionTwo = "Black"


function startGame() {

    //Delete player room
    body.innerHTML = ""

    //Create question
    const question = document.createElement('h1')
    question.innerHTML = currentQuestion
    question.classList.add('question')

    //Create option one
    const optionOne = document.createElement('button')
    optionOne.innerHTML = currentOptionOne
    optionOne.classList.add('option-1')

    //Create option two
    const optionTwo = document.createElement('button')
    optionTwo.innerHTML = currentOptionTwo
    optionTwo.classList.add('option-2')

    //Adding created elements
    body.appendChild(question)
    body.appendChild(optionOne)
    body.appendChild(optionTwo)
}

socket.on('message', message => {
    console.log(message)
})

console.log('Hello world!')

// insertAdjacentHTML("afterend", `<li><strong>${teamMember.username}</strong><ul class="stats"><li>Wins: ${teamMember.wins}</li><li>KD: ${teamMember.kd}</li></ul></li>}")<li><strong>${teamMember.username}</strong><ul class="stats"><li>Wins: ${teamMember.wins}</li><li>KD: ${teamMember.kd}</li></ul></li>}`