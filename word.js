var Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    this.letters = [];
    this.makeLetters = function() {
        let wordArr = this.word.split("");
        for (let i = 0; i < wordArr.length; i++) {
            let newLetter = new Letter(wordArr[i]);
            this.letters.push(newLetter);
        }
    }
    this.makeGuess = function(guess) {
        this.letters.forEach(letter => {
            Letter.check(guess)
        });
    }
    this.update = function() {
        let displayedWord = "";
        this.letters.forEach(letter => {
            displayedWord += Letter.show() + " ";
        });
        return displayedWord;
    }
}

module.exports = Word;