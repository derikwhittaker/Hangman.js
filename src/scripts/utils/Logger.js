/*jslint node: true */
/*jslint esversion: 6 */

class Logger {
    constructor() { }
    logDebug(area, message) {
        message = message || "";
        console.log("[Debug] - ( " + area + " ) - " + message);
    }
    logError(area, message) {
        message = message || "";
        
        console.log("[Error] - ( " + area + " ) - " + message);
    }
    logInfo(area, message) {
        message = message || "";
        console.log("[Info] - ( " + area + " ) - " + message);
    }
}

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Logger;
//# sourceMappingURL=logger.js.map