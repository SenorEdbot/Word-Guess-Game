var answerArr = ["guess1","guess2","guess3","guess4","guess5"];
var userGuessArr = []; /*This will be individual characters (a, b, c)*/
var incorrectGuessArr = []; /*keeps track of the incorrect guesses (a, b, c)*/
var wins = 0;
var guessesRemaining = 10;
// Setting ID tag variables
var lastGuessID = document.getElementById("lastGuess");
var currentAnswerID = document.getElementById("currentAnswer");
var incorrectGuessesID = document.getElementById("incorrectGuesses");
var remainingGuessesID = document.getElementById("remainingGuesses");
var winTrackerID = document.getElementById("winTracker");

//Setting text variables
var lastGuessText = "";
var currentAnswerText = "";
var incorrectGuessesText = "";
var remainingGuessesText = "";
var winTrackerText = "";

// Randomly choosing one of the answers then splitting that into an array
var currentAnswer = answerArr[Math.floor(Math.random() * answerArr.length)];
var currentAnswerArr = currentAnswer.split("");


//Listener for a keyup
document.onkeyup = function(event){

    // Storing the key in a variable
    var userGuess = event.key;


    // Initial setup



    // logic to decide what to do with the user guess
    if (userGuessArr.indexOf(userGuess)> -1) {
        // check if the letter has been used before
        lastGuessText = "You've already selected that letter, please chooe another one.";
        lastGuessID.textContent = lastGuessText;
    }
    else if ( currentAnswerArr.indexOf(userGuess) > -1 ) {
        // Adding the users first guess to the userGuessArr
        userGuessArr.push(userGuess);
        // logic to decide what part of the currentAnswerArr the guess is and then displaying the letter
        // check for duplicate letters in a word ("letter" for example has 2 e's nad 2 t's)

    }
    else { 
        // Adding the users guess to the userGuessArr
        userGuessArr.push(userGuess);
        // add user guess to the incorrect guesses array
        incorrectGuessArr.push(userGuess);
    }
}