const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const choices = ['rock', 'paper', 'scissors'];
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const clear = document.getElementById('clear');
const result = document.getElementById('result');
const play = document.getElementById('play');

localStorage.getItem('scores') ? playerScore.innerHTML = JSON.parse(localStorage.getItem('scores')).player : playerScore.innerHTML = 0;
localStorage.getItem('scores') ? computerScore.innerHTML = JSON.parse(localStorage.getItem('scores')).computer : computerScore.innerHTML = 0;

// events
rock.addEventListener('click', () => {
  playGame('rock');
  saveResult(playerScore, computerScore);
});

paper.addEventListener('click', () => {
  playGame('paper');
  saveResult(playerScore, computerScore);
});

scissors.addEventListener('click', () => {
  playGame('scissors');
  saveResult(playerScore, computerScore);
});
clear.addEventListener('click', () => {
  clearProduct()
  saveResult(playerScore, computerScore);
});

// play game function
function playGame(playerInput) {
  const computerInput = choices[Math.floor(Math.random() * 3)];

  // console.log(computerInput);
  let result = "";

  if (playerInput === computerInput) {
    result = "Tie";
  } else {
    switch (playerInput) {
      case "rock":
        result = computerInput === "scissors" ? "Win" : "Lose";
        break;
      case "paper":
        result = computerInput === "rock" ? "Win" : "Lose";
        break;
      case "scissors":
        result = computerInput === "paper" ? "Win" : "Lose";
        break;
    }
  }
  play.innerHTML = `Player: <strong style="color:#874CCC">${playerInput}</strong> vs Computer: <strong style="color:#874CCC">${computerInput}</strong><br> It's a <strong style="color:#874CCC">${result}</strong>`;
  result.innerHTML = result;
  if (result === "Win") {
    playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
  } else if (result === "Lose") {
    computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
  }
}

// clear product
function clearProduct() {
  playerScore.innerHTML = 0;
  computerScore.innerHTML = 0;
  result.innerHTML = "";
  play.innerHTML = "";
}

function saveResult(playerScore, computerScore) {
  const scores = {
    player: parseInt(playerScore.innerHTML),
    computer: parseInt(computerScore.innerHTML)
  };

  localStorage.setItem('scores', JSON.stringify(scores));
}

console.log(JSON.parse(localStorage.getItem('scores')));



