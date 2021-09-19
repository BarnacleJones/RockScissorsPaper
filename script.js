
//function for computer choice
function computerPlay(){
let selection = ['rock', 'paper', 'scissors'];
let choice = selection[Math.floor(Math.random() * 3)]
return choice;
}

var userCounter = 0;
var computerCounter = 0;
document.getElementById("userCount").innerText = userCounter;
document.getElementById("compCount").innerText = computerCounter;

//function to determines who wins
function playRound(playerSelection, computerSelection){
if ((playerSelection === 'rock') && (computerSelection === 'rock')) {
    var results = "This is a tie! Both rocks!";
}
if ((playerSelection) === 'rock' && (computerSelection === 'paper')) {
    var results = "Computer wins, paper beats rock!";
    computerCounter++;
}
if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
    var results = "You win! Rock beats scissors";
    userCounter++;
}
if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
    var results = " You win! Paper beats rock!";
    userCounter++;
}
if ((playerSelection === 'paper') && (computerSelection === 'paper')) {
    var results = "This is a tie! Both paper!"
}
if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
    var results = "Computer wins! Paper beats scissors";
    computerCounter++;
}
if ((playerSelection === 'scissors') && (computerSelection === 'scissors')) {
    var results = "This is a tie! Both Scissors!";
}
if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
    var results = "You win! Scissors beat paper!";
    userCounter++;
}
if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
    var results = "Computer Wins! Rock beats scissors!";
    computerCounter++;
}
return results;
}

//function for getting how many times you want to play
//and making radio buttons for each round
function getSelections(){
    document.querySelector(".radios").innerHTML = "";
    var repeats = document.querySelector("#nums").value;
    for (let index = 1; index <= repeats; index++) {
        let choiceSelection = document.createElement("div");
        choiceSelection.setAttribute("id", "selection");
        choiceSelection.innerHTML = `
        <br>
        <h3>Game:${index}</h3>
        <label for="rock" id=choice${index}>Rock</label>
        <input type="radio" id='rock${index}' value="" name="group${index}">
        <br>
        <label for="paper" id=choice${index}>Paper</label>
        <input type="radio" id='paper${index}' value="" name="group${index}">
        <br>
        <label for="scissor" id=choice${index}>Scissors</label>
        <input type="radio" id='scissors${index}' value="" name="group${index}">
        `
        document.querySelector(".radios").appendChild(choiceSelection); 

    }
    computerCounter = 0;
    userCounter =0;
    document.getElementById("userCount").innerText = userCounter;
    document.getElementById("compCount").innerText = computerCounter;
    
}



function game(){
    const computerSelection = computerPlay();
    var repeats = document.querySelector("#nums").value;
    let display = document.createElement("ul");
    document.querySelector(".resultsBoard").innerHTML = "";


    //for each game this loops
    for (let index = 1; index <= repeats; index++) {
        
        //something not working here
        if (document.getElementById(("rock" + index)).checked) {
            var playerSelection = "rock";
            let listItem = document.createElement("li");
            listItem.innerHTML = `
            Game: ${index} 
            <ul>
            <li>Your guess: ${playerSelection}</li>
            <li>Computer's guess: ${computerSelection}</li>
            <li>Result: ${playRound(playerSelection, computerSelection)}</li>
            </ul>
            `
            display.appendChild(listItem); 
                
        }
        if (document.getElementById(('paper' + index)).checked) {
            var playerSelection = "paper";
            let listItem = document.createElement("li");
            listItem.innerHTML = `
            Game: ${index} 
            <ul>
            <li>Your guess: ${playerSelection}</li>
            <li>Computer's guess: ${computerSelection}</li>
            <li>Result: ${playRound(playerSelection, computerSelection)}</li>
            </ul>
            `
            display.appendChild(listItem); 
                
        }
        if (document.getElementById(("scissors" + index)).checked) {
            var playerSelection = "scissors";
            let listItem = document.createElement("li");
            listItem.innerHTML = `
            Game: ${index} 
            <ul>
            <li>Your guess: ${playerSelection}</li>
            <li>Computer's guess: ${computerSelection}</li>
            <li>Result: ${playRound(playerSelection, computerSelection)}</li>
            </ul>
            `
            display.appendChild(listItem); 
            
                
        }
      
    
    }
    document.getElementById("userCount").innerText = userCounter;
    document.getElementById("compCount").innerText = computerCounter;
    document.querySelector(".resultsBoard").append(display);
    
    
}