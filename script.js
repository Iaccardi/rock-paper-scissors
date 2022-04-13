const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
//play the game

for (let i = 0; i <= 5; i++) {
 
playRound(i);

}
logWins();
}

function playRound (round) {
//function that plays the game

  const playerSelection= playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  
  console.log(winner);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round); 

}

function playerChoice () {
//get input from the player and turn it all lowercase
let input = prompt("Type rock, paper, or scissors");
input = input.toLowerCase();

//if user clicks cancel, prompt again
while(input == null) {
    input = prompt("Type rock, paper, or scissors");
}


//make sure input is in the choices array
let check = validateInput(input);
if(check == false) { 
    input = prompt("Type rock, paper, or scissors. The spelling must be exact.")

    while(input == null) {
        input = prompt("Type rock, paper, or scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
}
return input;
}

function computerChoice() {
//random computer choice
return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(choiceP,choiceC) {
    if(choiceP == choiceC) {
        return 'Tie';
    } else if (
    (choiceP == "rock" && choiceC == "scissors") || 
    (choiceP == "paper" && choiceC == "rock") || 
    (choiceP == "scissors" && choiceC == "paper")) {
        return 'Player';
    } else {
        return "Computer";
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").legnth;
    let computerWins = winners.filter((item) => item == "Player").length;
    let ties = winners.filter((item) => item == "Player").length;
    console.log('Results: ');
    console.log("Player Wins: ", playerWins);
    console.log("Computer Wins: ", computerWins);
    console.log("Ties: ", ties);

}

function logRound(playerChoice, computerChoice, winner) {
    console.log('Round', round);
    console.log("Player Chose: ", playerChoice);
    console.log("Computer Chose: ", computerChoice);
    console.log(winner, 'Won the Round');
}
game();