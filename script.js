const playerDisplay = document.getElementById('playerDisplay')
const computerDisplay = document.getElementById('computerDisplay')
const rockChoice = document.getElementById('rock')
const paperChoice = document.getElementById('paper')
const scissorsChoice = document.getElementById('scissors')
const resultText = document.getElementById('resultText')
const playerScoreDisplay = document.getElementById('playerScore')
const computerScoreDisplay = document.getElementById('computerScore')
const gameOver_lay = document.getElementById('gameOver')
const gameOverText = document.getElementById('gameOverText')
const playAgainBtn = document.getElementById('playAgain')

let playerScore = 0
let computerScore = 0
let winningScore = 5
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

playAgainBtn.addEventListener('click', () => {
  playerScore = 0
  computerScore = 0
  resultText.innerText = 'First to 5 wins!'
  updateDisplay()
  gameOver_lay.classList.toggle('active')
})

function playRound(playerChoice) {
  let computerChoice = random()
  if (playerChoice == 0) {
    if (computerChoice == 0) {
      resultText.innerText = tie
    } else if (computerChoice == 1) {
      resultText.innerText = lose
      computerScore++
    } else if (computerChoice == 2) {
      resultText.innerText = win
      playerScore++
    }
  } else if (playerChoice == 1) {
    if (computerChoice == 0) {
      resultText.innerText = win
      playerScore++
    } else if (computerChoice == 1) {
      resultText.innerText = tie
    } else if (computerChoice == 2) {
      resultText.innerText = lose
      computerScore++
    }
  } else if (playerChoice == 2) {
    if (computerChoice == 0) {
      resultText.innerText = lose
      computerScore++
    } else if (computerChoice == 1) {
      resultText.innerText = win
      playerScore++
    } else if (computerChoice == 2) {
      resultText.innerText = tie
    }
  }
  updateDisplay(playerChoice, computerChoice)
  if (playerScore == 5 || computerScore == 5) {
    gameOver()
  }
}

function updateDisplay(playerChoice, computerChoice) {
  playerScoreDisplay.innerText = 'You: ' + playerScore
  computerScoreDisplay.innerText = 'Computer: ' + computerScore

  if (playerChoice == 0) {
    playerDisplay.classList.remove('paper', 'scissors')
    playerDisplay.classList.add('rock')
  } else if (playerChoice == 1) {
    playerDisplay.classList.remove('rock', 'scissors')
    playerDisplay.classList.add('paper')
  } else {
    playerDisplay.classList.remove('paper', 'rock')
    playerDisplay.classList.add('scissors')
  }

  if (computerChoice == 0) {
    computerDisplay.classList.remove('paper', 'scissors')
    computerDisplay.classList.add('rock')
  } else if (computerChoice == 1) {
    computerDisplay.classList.remove('rock', 'scissors')
    computerDisplay.classList.add('paper')
  } else {
    computerDisplay.classList.remove('paper', 'rock')
    computerDisplay.classList.add('scissors')
  }
}

function gameOver() {
  gameOver_lay.classList.toggle('active')
  if (playerScore == 5) {
    gameOverText.innerText = 'You won!'
    playAgainBtn.style.background = '#0f0'
  } else if (computerScore == 5) {
    gameOverText.innerText = 'You lost...'
    playAgainBtn.style.background = '#f00'
  }
}