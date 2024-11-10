// Sets the time
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
document.getElementById('hours').innerHTML = `<h1>${hours}:${minutes}<h1>`;

// A variable that gets the input section
const input_section = document.getElementById('input_section');

// A variable that gets the div that will show the result
let result_div = document.getElementById('res');

// An object that will show the score and a variable getting a div
const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};



// This function will define which move the computer will take
function computerChoice() {
    random = Math.random();
    computer = '';
    
    if (random <= 1 / 3) {
        computer = 'rock';
    } else if (random > 1 / 3 && random <= 2 / 3) {
        computer = 'paper';
    } else if (random > 2 / 3 && random <= 1) {
        computer = 'scissors';
    }

    return computer;
}

// This function plays the game based on your choice
function playGame(player_choice) {
    let computer = computerChoice();
    let result = ''
    

    let score_div = document.getElementById('score_section');

    if (player_choice === 'rock') {
        if (computer === 'rock') {
            result = 'Draw.';
        } else if (computer === 'paper') {
            result = 'You lost!';
        } else if (computer === 'scissors') {
            result = 'You won!';
        }
    } else if (player_choice === 'paper') {
        if (computer === 'rock') {
            result = 'You won!';
        } else if (computer === 'paper') {
            result = 'Draw.';
        } else if (computer === 'scissors') {
            result = 'You lost!';
        }
    } else if (player_choice === 'scissors') {
        if (computer === 'rock') {
            result = 'You lost!';
        } else if (computer === 'paper') {
            result = 'You won!';
        } else if (computer === 'scissors') {
            result = 'Draw.'
        }
    }
    
    

    result_div.innerHTML = `<h1>You picked ${player_choice}. The computer picked ${computer}. ${result}</h1>`;

    // Add 1 to wins, losses or ties depending on the result
    if (result === 'You won!') {
        score.wins ++;
    } else if (result === 'You lost!') {
        score.losses ++;
    } else if (result === 'Draw.') {
        score.ties ++;
    }

    score_div.innerHTML = `SCORE: <br> Wins: ${score.wins}; Losses: ${score.losses}; Ties: ${score.ties}.`;

    // Saves the score
    localStorage.setItem('score', JSON.stringify(score));
}

// Set the colors layout based on the time of the computer
const body = document.body
if (hours >= 6 && hours < 12) {
    body.style.backgroundColor = '#89c3c9';

} else if (hours >= 12 && hours < 16) {
    body.style.backgroundColor = '#02c6f7';
} else if (hours >= 16 && hours < 19) {
    body.style.backgroundColor = '#edae0e';
} else if (hours >= 19 && hours < 6) {
    body.style.backgroundColor = '#43484a';
    body.style.color = 'white';
}
