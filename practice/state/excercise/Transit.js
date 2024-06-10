"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transit = void 0;
var Transit = /** @class */ (function () {
    function Transit() {
    }
    Transit.prototype.getEta = function () {
        console.log("Calculating ETA (transit)");
        return 3;
    };
    Transit.prototype.getDestination = function () {
        console.log("Calculating Direction (transit)");
        return 3;
    };
    return Transit;
}());
exports.Transit = Transit;
