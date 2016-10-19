// JavaScript code goes on this page

var userChoice = prompt("Do you choose rock, paper, or scissors?");
var computerChoice = Math.random();

if (computerChoice <= 0.33) {
  computerChoice = "rock";
} else if (computerChoice <= 0.66) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

var compare = function(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    window.alert("The result is a tie!");
  } else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      window.alert("You win! Rock beats Scissors.");
    } else {
      window.alert("You lose! Paper beats Rock.");
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      window.alert("You lose! Rock beats Scissors.");
    } else {
      window.alert("You win! Scissors beats Paper.");
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      window.alert("You win! Paper beats Rock.");
    } else {
      window.alert("You lose! Scissors beats Paper.")
    }
  }
}
