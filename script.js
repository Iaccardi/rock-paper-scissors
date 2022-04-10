let items = ["Rock", "Paper", "Scissors"];

function computerChoice (arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];
		return item;
 }

function playerChoice() {
	let playerAnswer= prompt("Choose Rock, Paper, or Scissors");
	let x = playerAnswer.charAt(0);
	let last = playerAnswer.slice(1);
	let finalPlayerAnswer = x.toUpperCase() + last;
  
	console.log("You chose: " + finalPlayerAnswer);
  return finalPlayerAnswer;
}

let computerPick = computerChoice(items);
let playerPick = playerChoice();
console.log("The computer chose: " + computerPick);

if(playerPick == "Rock" && computerPick == "Scissors") {
	console.log("YOU ARE THE WINNER");
} else if (playerPick == "Scissors" && computerPick == "Rock") {
	console.log("YOU LOSE, PLAY AGAIN!");
}	else if (playerPick == "Paper" && computerPick == "Scissors") {
	console.log("YOU LOSE, PLAY AGAIN");
 } else if (playerPick == "Rock" && computerPick == "Paper") {
 	console.log("YOU LOSE, PLAY AGAIN");
 } else if (playerPick == "Paper" && computerPick == "Rock") {
 	console.log("YOU ARE THE WINNER");
 } else if (playerPick == "Scissors" && computerPick == "Paper") {
 	console.log("YOU ARE THE WINNER");
 } else if (playerPick == computerPick) {
	console.log("You chose the same answer, play again!");
  }
