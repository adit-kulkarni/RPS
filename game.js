let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection){
    let resultDiv = document.querySelector('.Result')
    console.log(`Human chose ${humanSelection} and Computer chose ${computerSelection}`)

    if (humanSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "scissors") {
            humanScore += 1;
            console.log("Sigma Human Won This Round")
            resultDiv.textContent =  "Sigma Human Won This Round"
        } else if (computerSelection.toLowerCase() == "paper") {
            computerScore += 1;
            console.log("AI Won This Round - the end is near") 
            resultDiv.textContent = "AI Won This Round - the end is near"
        } else {
            console.log("It's a tie this round")
            resultDiv.textContent = "It's a tie this round"
            
        }
    } else if (humanSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") {
            humanScore += 1;
            console.log("Sigma Human Won This Round") 
            resultDiv.textContent =  "Sigma Human Won This Round"
        } else if (computerSelection.toLowerCase() == "scissors") {
            computerScore += 1;
            console.log("AI Won This Round - the end is near") 
            resultDiv.textContent = "AI Won This Round - the end is near"
        } else {
            console.log("It's a tie this round")
            resultDiv.textContent = "It's a tie this round"
        }

    } else if (humanSelection.toLowerCase() == "scissors") {
        if (computerSelection.toLowerCase() == "paper") {
            humanScore += 1;
            console.log("Sigma Human Won This Round") 
            resultDiv.textContent =  "Sigma Human Won This Round"
        } else if (computerSelection.toLowerCase() == "rock") {
            computerScore += 1;
            console.log("AI Won This Round - the end is near") 
            resultDiv.textContent = "AI Won This Round - the end is near"
        } else {
            console.log("It's a tie this round")
            resultDiv.textContent = "It's a tie this round"
        }
    }
}

function getHumanSelection(){
    const strategy = prompt("Select your weapon", "Rock");
    return strategy.toLowerCase();
}

function getComputerSelection(){
    const strategies = ['Rock', 'Paper', 'Scissors'];
    const randStrat = Math.floor(Math.random() * strategies.length);
    let chosenStrat = strategies[randStrat];
    return chosenStrat.toLowerCase();
}

// function playGame() {
//     let roundCount = 1;
//     const MAXSCORE = 5;

//     while (Math.max(humanScore, computerScore) < MAXSCORE) {
//         const humanSelection = getHumanSelection();
//         const computerSelection = getComputerSelection();   
//         playRound(humanSelection, computerSelection);
//         console.log(`At the end of round ${roundCount} the score is Human: ${humanScore} --> Computer: ${computerScore}`)
//         roundCount += 1
//     }

//     if (humanScore == MAXSCORE) {
//         console.log(`Congratulations Human. You won ${humanScore} --- ${computerScore} `)
//     } else {
//         console.log(`Comiseratinos Human. You lost ${humanScore} --- ${computerScore} `)
//     }


// }

// playGame();

function addEventListenersToButtons(){
    let strategyButtons = document.querySelectorAll('.HumanSelection button');
    
    strategyButtons.forEach((button) => {
        button.addEventListener("click", () => {
            let computerSelection = getComputerSelection(); // Get a new computer selection for each click

            playRound(button.textContent, computerSelection);  // Play a round using the new selection
            displayStrategies(button.textContent, computerSelection);  // Display the strategies
            displayScores();  // Display the scores
            endGame();
        });
    });
}


function endGame(){
    const MAXSCORE = 5;
    if (Math.max(humanScore, computerScore) == 5) {
        let body = document.querySelector('body')
        let resetGameButton = document.createElement('button')
        resetGameButton.textContent = "Play Again"
        resetGameButton.addEventListener("click", () => location.reload())
        body.appendChild(resetGameButton);
    
        let strategyButtons = document.querySelectorAll('.HumanSelection button');
        strategyButtons.forEach((button) => {
            button.disabled = true; })

    } 
}


function displayScores(){
    let humanScoreDiv = document.querySelector('.HumanScore');
    humanScoreDiv.textContent = `Your points ${humanScore}`;
    let computerScoreDiv = document.querySelector('.ComputerScore');
    computerScoreDiv.textContent = `AI points ${computerScore}`;

}




function displayStrategies(humanSelection, computerSelection){
    let humanDisplay = document.querySelector('.HumanChoice')
    humanDisplay.textContent = `You have selected ${humanSelection}`;

    let computerDisplay = document.querySelector('.ComputerChoice');
    computerDisplay.textContent = `The AI has chosen ${computerSelection}`;;

}



document.addEventListener("DOMContentLoaded", function() {
    addEventListenersToButtons()
});
