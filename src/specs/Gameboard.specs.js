/*jslint node: true */
/*jslint esversion: 6 */

const GameBoard = require("../scripts/GameBoard");

describe("Gameboard Suite", function() {
  it("When provided a secret word, will set underlying instance correctly", function() {

    var secretWord = "secret word";
    var board = new GameBoard.GameBoard({});

    board.setSecretWord(secretWord);

    expect(board.SecretWord._secretWord).toBe(secretWord);
  });
});


describe("SecretWord Suite", function(){
    it("When provided a secret word, will set internal holder correctly", function(){
        var secret = "secret word"
        var secretWord = new GameBoard.SecretWord(secret);

        
        expect(secretWord._secretWord).toBe(secret);
    });

    it("When provided a secret word, will build internal letters correctly", function(){
        var secret = "secret word"
        var secretWord = new GameBoard.SecretWord(secret);

        
        expect(secretWord._letters.length).toBe(secret.length);
    });

    it("When building internal letters correctly, all instances will be set to false by default", function(){
        var secret = "secret word"
        var secretWord = new GameBoard.SecretWord(secret);

        secretWord._letters.forEach(function(element) {
            expect(element.guessed).toBe(false);
        }, this);
    });
});