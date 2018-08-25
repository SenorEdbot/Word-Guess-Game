var answerArr = ["crocodile","gorilla","tiger","piranha","leopard", "rhinoceros", "elephant"];
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
//Setting Image ID tag variables
var gameImageID = document.getElementById("gameImage");
//Setting Audio
var gameSound = "";

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

//Researching W3 Schools this example was showcased and fit my needs perfectly. A sound playing with no display or controls that has the src pushed through.
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
function setCurrentAnswer() {
    currentAnswer = answerArr[Math.floor(Math.random() * answerArr.length)];
    currentAnswerArr = currentAnswer.split("");
    currentAnswerText = "-".repeat(currentAnswerArr.length);
    currentAnswerID.textContent = currentAnswerText;
    currentAnswerTextArr = currentAnswerText.split("");
}
function gameReset() {
    userGuessArr = [];
    incorrectGuessArr = [];
    incorrectGuessesText = "";
    incorrectGuessesID.textContent = incorrectGuessesText;
    guessesRemaining = 10;
    remainingGuessesText = "Remaining Guesses: " + guessesRemaining + ".";
    remainingGuessesID.textContent = remainingGuessesText;
}
function gameLogic(x){
    // logic to decide what to do with the user guess
    if (userGuessArr.indexOf(x)> -1) {
        // check if the letter has been used before
        lastGuessText = "You've already selected "+ x +", please chooe another letter.";
        lastGuessID.textContent = lastGuessText;
    }
    else if ( currentAnswerArr.indexOf(x) > -1 ) {
        // Adding the users first guess to the userGuessArr
        userGuessArr.push(x);

        //Set lastGuessText
        lastGuessText = "Correct! You selected: " + x + "."
        lastGuessID.textContent = lastGuessText;
        // logic to decide what part of the currentAnswerArr the guess is and then displaying the letter
        for (var i=0; i<currentAnswerArr.length; i++) {
            if ( currentAnswerArr[i] === x ) {
                currentAnswerTextArr[i] = x;
                currentAnswerText = currentAnswerTextArr.join('');
                currentAnswerID.textContent = currentAnswerText;
            }
        }

        //if statement to decide if the user won
        if (currentAnswerText === currentAnswer) {
            wins += 1;
            winTrackerText = "Current wins " + wins + ".";
            winTrackerID.textContent = winTrackerText;
            //Logic for Photo
            
            if (currentAnswer == "crocodile"){
                gameImageID.setAttribute("src","assets/images/crocodile.jpg");
                //resets after win
                gameReset();
                //setting the current answer again
                setCurrentAnswer();
                //notify user
                lastGuessText = "CONGRATS! Don't get bit by the Croc! Select any letter to play again.";
                lastGuessID.textContent = lastGuessText;
                gameSound = new sound("assets/audio/crocodileSound.mp3");
                gameSound.play();
            } else if (currentAnswer == "gorilla") {
                gameImageID.setAttribute("src","assets/images/gorilla.jpg");
                //resets after win
                gameReset();
                //setting the current answer again
                setCurrentAnswer();
                //notify user
                lastGuessText = "CONGRATS! Gorillas have unique noseprints which can be used to identify individuals! Select any letter to play again.";
                lastGuessID.textContent = lastGuessText;
                gameSound = new sound("assets/audio/gorillaSound.mp3");
                gameSound.play();
            } else if (currentAnswer == "tiger") {
                gameImageID.setAttribute("src","assets/images/tiger.jpg");
                //resets after win
                gameReset();
                //setting the current answer again
                setCurrentAnswer();
                //notify user
                lastGuessText = "CONGRATS! No 2 tigers have the same stripe patern o.O. Select any letter to play again.";
                lastGuessID.textContent = lastGuessText;
                gameSound = new sound("assets/audio/tigerSound.mp3");
                gameSound.play();
            } else if (currentAnswer == "piranha") {
                gameImageID.setAttribute("src","assets/images/piranha.jpg");
                //resets after win
                gameReset();
                //setting the current answer again
                setCurrentAnswer();
                //notify user
                lastGuessText = "CONGRATS! Don't stick any fingers in the water. Select any letter to play again.";
                lastGuessID.textContent = lastGuessText;
                gameSound = new sound("assets/audio/piranhaSound.mp3");
                gameSound.play();
            } else if (currentAnswer == "leopard") {
                gameImageID.setAttribute("src","assets/images/leopard.jpg");
                //resets after win
                gameReset();
                //setting the current answer again
                setCurrentAnswer();
                //notify user
                lastGuessText = "CONGRATS! Leopards can run 36 miles per hour! Select any letter to play again.";
                lastGuessID.textContent = lastGuessText;
                gameSound = new sound("assets/audio/leopardSound.mp3");
                gameSound.play();
            } else if (currentAnswer == "rhinoceros") {
                gameImageID.setAttribute("src","assets/images/rhinoceros.png");
                //resets after win
                gameReset();
                //setting the current answer again
                setCurrentAnswer();
                //notify user
                lastGuessText = "CONGRATS! Rhinoceros actually means nose horn! Select any letter to play again.";
                lastGuessID.textContent = lastGuessText;
                gameSound = new sound("assets/audio/rhinocerosSound.mp3");
                gameSound.play();
            } else if (currentAnswer == "elephant") {
                gameImageID.setAttribute("src","assets/images/elephant.jpg");
                //resets after win
                gameReset();
                //setting the current answer again
                setCurrentAnswer();
                //notify user
                lastGuessText = "CONGRATS! Elephants are the largest land animal on earth! Select any letter to play again.";
                lastGuessID.textContent = lastGuessText;
                gameSound = new sound("assets/audio/elephantSound.mp3");
                gameSound.play();
            }

        }

    }
    else { 
        // Adding the users guess to the userGuessArr
        userGuessArr.push(x);
        //take 1 away from the number of guesses remaining
        guessesRemaining -= 1;
        remainingGuessesText = "Remaining Guesses: " + guessesRemaining + ".";
        remainingGuessesID.textContent = remainingGuessesText;
        
        // add user guess to the incorrect guesses array
        incorrectGuessArr.push(x);
        incorrectGuessesText = incorrectGuessArr.join(", ");
        incorrectGuessesID.textContent = incorrectGuessesText;
        //Set lastGuessText
        lastGuessText = "Incorrect! You selected: " + x + "."
        lastGuessID.textContent = lastGuessText;

        //if statement to determine if their are no more guesses left
        if ( guessesRemaining === 0 ) {
            //reset the game
            gameReset();
            //setting the current answer again
            setCurrentAnswer();
            gameImageID.setAttribute("src","assets/images/junglesafari.jpg");
            //notify user
            lastGuessText = "OH NO! You ran out of guesses. Select any letter to play again.";
            lastGuessID.textContent = lastGuessText;

        }

    }
}
//Listener for a keyup
document.onkeyup = function(event){
    // Storing the key in a variable
    var userGuess = event.key;
        
    //Looking into the keyup to determine what type of key was pressed.
    var userGuessCharCode = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z]/.test(userGuessCharCode)){
        //user input is a lowercase letter
        userGuess = userGuess.toLowerCase();
        gameLogic(userGuess);
    } else {
        //user input is not an upper or lower case letter
        lastGuessText = "Uh Oh. Please select a letter.";
        lastGuessID.textContent = lastGuessText;
    }  //First attempt at validating a lowerCase input

}