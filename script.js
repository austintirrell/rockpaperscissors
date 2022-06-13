const playerDisplay = document.getElementById('playerDisplay')
const computerDisplay = document.getElementById('computerDisplay')
const rockChoice = document.getElementById('rock')
const paperChoice = document.getElementById('paper')
const scissorsChoice = document.getElementById('scissors')
const resultText = document.getElementById('resultText')

let playerScore = 0
let computerScore = 0
let winningScore = 5
let rps = ['✊', '🫱', '✌️']
let random = () => Math.floor(Math.random() * 3)
let tie = 'That hand was a tie'
let lose = 'You lost that hand'
let win = 'You won that hand'

rockChoice.addEventListener('click', () => {
  playRound(0)
})
paperChoice.addEventListener('click', () => {
  playRound(1)
})
scissorsChoice.addEventListener('click', () => {
  playRound(2)
})

function playRound(playerChoice) {
  let computerChoice = random()
  if (playerChoice == 0) {
    if (computerChoice == 0) {
      resultText.innerText = tie
    } else if (computerChoice == 1) {
      resultText.innerText = lose
    } else if (computerChoice == 2) {
      resultText.innerText = win
    }
  } else if (playerChoice == 1) {
    if (computerChoice == 0) {
      resultText.innerText = win
    } else if (computerChoice == 1) {
      resultText.innerText = tie
    } else if (computerChoice == 2) {
      resultText.innerText = lose
    }
  } else if (playerChoice == 2) {
    if (computerChoice == 0) {
      resultText.innerText = lose
    } else if (computerChoice == 1) {
      resultText.innerText = win
    } else if (computerChoice == 2) {
      resultText.innerText = tie
    }
  }
}