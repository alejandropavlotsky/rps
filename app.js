let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function reset() {
  result_p.innerHTML = 'Choose between Rock, Paper or Scissors';
  userScore_span.innerHTML = 0;
  computerScore_span.innerHTML = 0;
  userScore = 0;
  computerScore = 0;
}

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function converToWord(letter) {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  return 'Scissors';
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = '(user)';
  const smallCompWord = '(comp)';
  result_p.innerHTML = `${converToWord(
    userChoice
  )} ${smallUserWord} beats  ${converToWord(
    computerChoice
  )} ${smallCompWord}. </br> You Win!`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove('green-glow');
  }, 300);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = '(user)';
  const smallCompWord = '(comp)';
  result_p.innerHTML = `${converToWord(
    userChoice
  )} ${smallUserWord} loses to  ${converToWord(
    computerChoice
  )} ${smallCompWord}. </br> You lost!`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove('red-glow');
  }, 300);
}
function draw(userChoice, computerChoice) {
  const smallUserWord = '(user)';
  const smallCompWord = '(comp)';
  result_p.innerHTML = `${converToWord(
    userChoice
  )} ${smallUserWord} equals  ${converToWord(
    computerChoice
  )} ${smallCompWord}. </br> It's a draw!`;
  document.getElementById(userChoice).classList.add('grey-glow');
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove('grey-glow');
  }, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
  }
}

function main() {
  rock_div.addEventListener('click', () => game('r'));
  paper_div.addEventListener('click', () => game('p'));
  scissors_div.addEventListener('click', () => game('s'));
}

main();
reset();
