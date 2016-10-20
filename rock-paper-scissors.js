// JavaScript code goes on this page

var userChoice = prompt("Do you choose rock, paper, scissors, lizard or Spock?");
document.getElementById('choice').innerHTML = "You picked: " + userChoice;
var computerChoice = Math.random();

if (computerChoice <= 0.2) {
  computerChoice = "rock";
} else if (computerChoice <= 0.4) {
  computerChoice = "paper";
} else if (computerChoice <= 0.6) {
  computerChoice = "scissors";
} else if (computerChoice <= 0.8) {
  computerChoice = "lizard";
} else {
  computerChoice = "Spock";
}

var reload = function() {
  location.reload();
}

var compare = function(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    document.getElementById('result').innerHTML = "The result is a tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      document.getElementById('result').innerHTML = "You win! Rock beats Scissors.";
    } else if (computerChoice === "paper"){
      document.getElementById('result').innerHTML ="You lose! Paper beats Rock.";
    } else if (computerChoice === "lizard") {
      document.getElementById('result').innerHTML ="You win! Rock beats lizard.";
    } else {
      document.getElementById('result').innerHTML ="You lose! Spock beats rock.";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      document.getElementById('result').innerHTML ="You lose! Rock beats Scissors.";
    } else if (computerChoice === "paper"){
      document.getElementById('result').innerHTML = "You win! Scissors beats Paper.";
    } else if (computerChoice === "lizard") {
      document.getElementById('result').innerHTML = "You win! Scissors beats Lizard.";
    } else {
      document.getElementById('result').innerHTML = "You lose! Spock beats scissors.";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      document.getElementById('result').innerHTML = "You win! Paper beats Rock.";
    } else if (computerChoice === "scissors") {
      document.getElementById('result').innerHTML = "You lose! Scissors beats Paper.";
    } else if (computerChoice === "lizard") {
      document.getElementById('result').innerHTML = "You lose! Lizard beats paper.";
    } else {
      document.getElementById('result').innerHTML = "You win! Paper beats Spock";
    }
  } else if (userChoice === "lizard") {
    if (computerChoice === "rock") {
      document.getElementById('result').innerHTML = "You lose. Rock beats lizard";
    } else if (computerChoice === "paper") {
      document.getElementById('result').innerHTML = "You win. Lizard beats paper.";
    } else if (computerChoice === "scissors") {
      document.getElementById('result').innerHTML = "You lose. Scissors beats lizard.";
    } else {
      document.getElementById('result').innerHTML = "You win! Lizard beats Spock.";
    }
  } else if (userChoice === "Spock") {
      if (computerChoice === "rock") {
        document.getElementById('result').innerHTML = "You win. Spock beats rock.";
      } else if (computerChoice === "paper") {
        document.getElementById('result').innerHTML = "You lose. Paper beats Spock.";
      } else if (computerChoice === "scissors") {
        document.getElementById('result').innerHTML = "You win. Spock beats scissors.";
      } else {
        document.getElementById('result').innerHTML = "You win. Lizard beats Spock.";
      }
  } else if (userChoice != "rock" || userChoice != "paper" || userChoice != "scissors" || userChoice != "lizard" || userChoice != "Spock") {
      document.getElementById('result').innerHTML = "error. try again.";
    }
  }
