function Letter(letter) {
    this.letter = letter;
    this.guess = false;
    this.show = function(){
        if (!this.guess) {
            return "_";
        } else {
            return this.letter;
        }
    }
    this.check = function() {
        if (guess === this.letter) {
            this.guess = true;
        }
    }
}

module.exports = Letter;