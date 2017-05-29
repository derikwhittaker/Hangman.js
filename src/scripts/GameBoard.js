/*jslint node: true */
/*jslint esversion: 6 */

const Logger = require("./utils/Logger");

class GameBoard {
    
    constructor(config) {
        this.logger = new Logger.default();
        this.loggingArea = "Game Board";
        this.engineConfig = config;
        this.SecretWord = {};
        
    }

    setup() {
        this.logger.logInfo(this.loggingArea, "Setting up board w/ " + JSON.stringify(this.engineConfig));

        this.buildEmptyBoard();
        var defaultValues = this.buildDefaultValues(this.engineConfig.size);
    }

    setSecretWord(secretWord){
        this.SecretWord =  new SecretWord(secretWord);
    }

    guessLetter(letter){
        return false;
    }
}

class SecretWord{
    constructor(secretWord){
        this._secretWord = secretWord;
        this._letters = [];

        for(var i = 0; i < secretWord.length; i++){
            var letter = secretWord[i];

            this._letters.push(
                            {letter: letter, guessed: false}
                        );
        }
    }
}

exports.GameBoard = GameBoard;
exports.SecretWord = SecretWord;