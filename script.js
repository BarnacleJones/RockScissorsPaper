//function for computer choice
function computerPlay(){
let selection = ['rock', 'paper', 'scissors'];
let choice = selection[Math.floor(Math.random() * 3)]
return choice;
}

var userCounter = 0;
var computerCounter = 0;

//function to determines who wins
function playRound(playerSelection, computerSelection){
if ((playerSelection === 'rock') && (computerSelection === 'rock')) {
    var results = "This is a tie! Both rocks!";
}
if ((playerSelection) === 'rock' && (computerSelection === 'paper')) {
    var results = "Computer wins, paper beats rock!";
    ++computerCounter;
}
if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
    var results = "You win! Rock beats scissors";    
}
if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
    var results = " You win! Paper beats rock!";    
}
if ((playerSelection === 'paper') && (computerSelection === 'paper')) {
    var results = "This is a tie! Both paper!"
}
if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
    var results = "Computer wins! Paper beats scissors";    
}
if ((playerSelection === 'scissors') && (computerSelection === 'scissors')) {
    var results = "This is a tie! Both Scissors!";
}
if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
    var results = "You win! Scissors beat paper!";    
}
if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
    var results = "Computer Wins! Rock beats scissors!";   
}
document.querySelector(".resultText").innerText = results;
}

function rockGame(){
    playerSelection = "rock"
    computerSelection = computerPlay();    
    playRound(playerSelection, computerSelection);    
    if (computerSelection == "rock") {
        document.querySelector(".compChoice").innerHTML = `
        <img class="compImage" src="images/rock.png" alt="rock" height="100px">
        <h3>Score: <span class="compScore"></span></h3>`;
    }
    if (computerSelection == "paper") {
        document.querySelector(".compChoice").innerHTML = `
        <img class="compImage" src="images/paper.png" alt="paper" height="100px">
        <h3>Score: <span class="compScore"></span></h3>`;
        computerCounter++;
    }
    if (computerSelection == "scissors") {
        document.querySelector(".compChoice").innerHTML = `
        <img class="compImage" src="images/scissors.png" alt="scissors" height="100px">
        <h3>Score: <span class="compScore"></span></h3>`;
        userCounter++;
    }
    document.querySelector(".userScore").innerText = userCounter;
    document.querySelector(".compScore").innerText = computerCounter;
    keepScore();
}

function paperGame(){
    playerSelection = "paper"
    computerSelection = computerPlay();    
    playRound(playerSelection, computerSelection);    
    if (computerSelection == "rock") {
        document.querySelector(".compChoice").innerHTML = `
        <img class="compImage" src="images/rock.png" alt="rock" height="100px">
        <h3>Score: <span class="compScore"></span></h3>`;
        userCounter++;
    }
    if (computerSelection == "paper") {
        document.querySelector(".compChoice").innerHTML = `
        <img class="compImage" src="images/paper.png" alt="paper" height="100px">
        <h3>Score: <span class="compScore"></span></h3>`;
    }
    if (computerSelection == "scissors") {
        document.querySelector(".compChoice").innerHTML = `
        <img class="compImage" src="images/scissors.png" alt="scissors" height="100px">
        <h3>Score: <span class="compScore"></span></h3>`;
        computerCounter++;
    }
    document.querySelector(".userScore").innerText = userCounter;
    document.querySelector(".compScore").innerText = computerCounter;
    keepScore();
}

function scissorsGame(){
    playerSelection = "scissors"
    computerSelection = computerPlay();    
    playRound(playerSelection, computerSelection);    
    if (computerSelection == "rock") {
        document.querySelector(".compChoice").innerHTML = `
        <img class="compImage" src="images/rock.png" alt="rock" height="100px">
        <h3>Score: <span class="compScore"></span></h3>`;
        computerCounter++;
    }
    if (computerSelection == "paper") {
        document.querySelector(".compChoice").innerHTML = `
        <img class="compImage" src="images/paper.png" alt="paper" height="100px">
        <h3>Score: <span class="compScore"></span></h3>`;
        userCounter++
    }
    if (computerSelection == "scissors") {
        document.querySelector(".compChoice").innerHTML = `
        <img class="compImage" src="images/scissors.png" alt="scissors" height="100px">
        <h3>Score: <span class="compScore"></span></h3>`
    }
    document.querySelector(".userScore").innerText = userCounter;
    document.querySelector(".compScore").innerText = computerCounter;
    keepScore();
}

function keepScore(){
    if (userCounter >= 5) {
        document.querySelector("body").innerHTML = `
        <div class="content">
        <h1>You win!</h1>
        <button onclick="reset()">Reset Game</button>
        </div>`;
        document.querySelector("body").style = "background-color: black";
                
    }
    if (computerCounter >= 5) {
        document.querySelector("body").innerHTML = `
        <div class="content">
        <h1>You lose!</h1>
        <button onclick="reset()">Reset Game</button>
        </div>`;
        document.querySelector("body").style = "background-color: black";
        
    }
}
// function that resets page to initial layout
function reset(){
    document.querySelector("body").innerHTML = `
    <div class="content">
<header>
<h1>
    <span>ROCK||</span>
    <span>PAPER||</span>
    <span>SCISSORS||</span>
</h1>
<h2>First to 5 wins</h2>
</header>

<div class="userChoice">
    <button class="rock" onclick="rockGame()"></button>
    <button class="paper" onclick="paperGame()"></button>
    <button class="scissors" onclick="scissorsGame()"></button>
    <h3>Score: <span class="userScore">0</span></h3>
</div>
<h3 style="color: white;">VS</h3>
<div class="compChoice">
    <img class="compImage" src="images/comp.png" alt="comuters brain" height="100px">  
    <h3>Score: <span class="compScore">0</span></h3>  
</div>

<div class="results"><h1 class=resultText></h1></div>

<a href="https://github.com/BenMJones1/RockScissorsPaper"><img src="images/git.PNG" alt="gitLogo" height="30px"></a>
</div>`;

    userCounter = 0;
    computerCounter = 0;
}



// add event listeners
// document.querySelector(".rock").addEventListener("click", rockGame());