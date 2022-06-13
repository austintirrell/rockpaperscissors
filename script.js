const playerDisplay = document.getElementById('playerDisplay')
const computerDisplay = document.getElementById('computerDisplay')

//returns random int between 1 and 3
let random = () => {
  return Math.floor(Math.random() * 3 + 1)
}