var Word = require("./word.js");
var inquirer = require("inquirer");

var gameArr = [
    "archer", "pam", "cheryl", "malory",
    "cyril", "ray", "lana"
];

var guesses;
var pickedWords;
var word;
var pickedWord;

function init() {
    pickedWords = [];
    console.log("Hello, and welcome to the Word Guess Game!");
    console.log("/n");
    playGame();
}

function playGame() {
    pickedWord = "";
    guesses = 10;
    if (pickedWords.length < gameArr.length) {
        pickedWord = getWord();
    } else {
        console.log("You got them all right!");
        continuePrompt();
    }
    if(pickedWord) {
        word = new Word(pickedWord);
        word.makeLetters();
        makeGuess();
    }
}

function getWord() {
    let rando = Math.floor(Math.random()* gameArr.length);
    let randomWord = gameArr[rand];
    if (pickedWords.indexOf(randomWord) === -1) {
        pickedWords.push(randomWord);
        return randomWord;
    } else {
        return getWord();
    }
}

function makeGuess() {
    let check = [];
    inquirer.prompt([
        {
        name: "guessLetter",
        message: Word.update() + "\nGuess a letter! \nGuesses Left: " + guesses;
        } 
    ])
    .then(data => {
        word.letters.forEach(letter => {
            Letter.check(data.guessedLetter);
            check.push(Letter.getCharacter());
        });
        if (guesses > 0 && checker.indexOf("_") !== -1) {
        if (guesses === 0) {
            console.log("Game Over.");
            continuePrompt();
        } else {
            makeGuess();
        }
    } else {
        console.log("You got the word")
        console.log(word.update());
        playGame();
    }
    });
}

function continuePrompt() {
    inquirer.prompt([
        {
        name: "continue",
        type: "list",
        message: "Would you like to play again?",
        choices: ["Yes", "No"]
        }
    ])
    .then (data => {
        if(data.continue === "Yes") {
            init();
        } else {
            console.log("Thanks for playing!");
        }
    });
}

init();