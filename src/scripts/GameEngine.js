/*jslint node: true */
/*jslint esversion: 6 */

const Logger = require("./utils/logger");
const GameBoard = require("./GameBoard");

class GameEngine {
    constructor() {
        this.loggingArea = "Game Engine";
        this.logger = new Logger.default();
    }

    play(config) {
        this.logger.logInfo(this.loggingArea, "Playing game with settings: " + JSON.stringify(config));
        var board = new GameBoard.GameBoard(config);
        board.setup();

        return board;
    }
}

Object.defineProperty(exports, "__esModule", { value: true });

exports.default = GameEngine;
//# sourceMappingURL=GameEngine.js.map