let humanScore = 0;
let cpuScore = 0;

//get computer choice
function computerChoice() {
  let cpuNumber = Math.random();
  let result =
    cpuNumber < 1 / 3 ? "rock" : cpuNumber < 2 / 3 ? "paper" : "scissors";
  return result;
}
// get human choice
function humanChoice() {
  let choice = undefined;
  while (!validChoice(choice)) {
    choice = prompt("Make your choice -- rock, paper, or scissors?");
  }
  return choice.toLowerCase();
}

function validChoice(input) {
  switch (input) {
    case "rock":
      return true;
    case "paper":
      return true;
    case "scissors":
      return true;
  }
}

function playRound(humanChoice, cpuChoice) {
  if (humanChoice === cpuChoice) {
    console.log("It's a tie! you both picked " + humanChoice);
  } else if (humanChoice === "rock") {
    if (cpuChoice === "paper") lose(humanChoice, cpuChoice);
    else if (cpuChoice === "scissors") win(humanChoice, cpuChoice);
  } else if (humanChoice === "paper") {
    if (cpuChoice === "scissors") lose(humanChoice, cpuChoice);
    else if (cpuChoice === "rock") win(humanChoice, cpuChoice);
  } else if (humanChoice === "scissors") {
    if (cpuChoice === "rock") lose(humanChoice, cpuChoice);
    if (cpuChoice === "paper") win(humanChoice, cpuChoice);
  }
}

function lose(humanChoice, cpuChoice) {
  console.log(`Computer chooses ${cpuChoice}. You lose this round!`);
  cpuScore++;
  printScore();
}

function win(humanChoice, cpuChoice) {
  console.log(`Computer chooses ${cpuChoice}. You win!`);
  humanScore++;
  printScore();
}

function printScore() {
  console.log("You: " + humanScore + " Computer: " + cpuScore);
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(humanChoice(), computerChoice());
  }
  if (humanScore > cpuScore) {
    console.log("YOU WIN!");
  } else {
    console.log("Computer WINS! Better luck next time!");
  }
}

playGame();
