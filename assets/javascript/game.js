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
var lastGuessText = "Please press a letter to make your first guess.";
var currentAnswerText = "";
var incorrectGuessesText = "";
var remainingGuessesText = "Remaining Guesses: "+ guessesRemaining +".";
var winTrackerText = "Current wins: " + wins + ".";

//Set the initial text
lastGuessID.textContent = lastGuessText;
remainingGuessesID.textContent = remainingGuessesText;
winTrackerID.textContent = winTrackerText;

// Randomly choosing one of the answers then splitting that into an array
var currentAnswer = answerArr[Math.floor(Math.random() * answerArr.length)];
var currentAnswerArr = currentAnswer.split("");
currentAnswerText = "-".repeat(currentAnswerArr.length);
currentAnswerID.textContent = currentAnswerText;
currentAnswerTextArr = currentAnswerText.split("");


//Listener for a keyup
document.onkeyup = function(event){

    // Storing the key in a variable
    var userGuess = event.key;


    // logic to decide what to do with the user guess
    if (userGuessArr.indexOf(userGuess)> -1) {
        // check if the letter has been used before
        lastGuessText = "You've already selected "+ userGuess +", please chooe another letter.";
        lastGuessID.textContent = lastGuessText;
    }
    else if ( currentAnswerArr.indexOf(userGuess) > -1 ) {
        // Adding the users first guess to the userGuessArr
        userGuessArr.push(userGuess);

        //Set lastGuessText
        lastGuessText = "Correct! You selected: " + userGuess + "."
        lastGuessID.textContent = lastGuessText;
        // logic to decide what part of the currentAnswerArr the guess is and then displaying the letter
        // check for duplicate letters in a word ("letter" for example has 2 e's nad 2 t's)
        for (var i=0; i<currentAnswerArr.length; i++) {
            if ( currentAnswerArr[i] === userGuess ) {
                currentAnswerTextArr[i] = userGuess;
                currentAnswerText = currentAnswerTextArr.join('');
                currentAnswerID.textContent = currentAnswerText;
            }
        }

        //if statement to decide if the user won
        if (currentAnswerText === currentAnswer) {
            wins += 1;
            winTrackerText = "Current wins " + wins + ".";
            winTrackerID.textContent = winTrackerText;
            //resets after win
            userGuessArr = [];
            incorrectGuessArr = [];
            guessesRemaining = 10;
            currentAnswer = answerArr[Math.floor(Math.random() * answerArr.length)];
        }

    }
    else { 
        // Adding the users guess to the userGuessArr
        userGuessArr.push(userGuess);
        // add user guess to the incorrect guesses array
        incorrectGuessArr.push(userGuess);
        incorrectGuessesText = incorrectGuessArr.join(", ");
        incorrectGuessesID.textContent = incorrectGuessesText;
        //Set lastGuessText
        lastGuessText = "Incorrect! You selected: " + userGuess + "."
        lastGuessID.textContent = lastGuessText;
        //take 1 away from the number of guesses remaining
        guessesRemaining -= 1;
        remainingGuessesText = "Remaining Guesses: " + guessesRemaining + ".";remainingGuessesID.textContent = remainingGuessesText;

    }
}