"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Walking = void 0;
var Walking = /** @class */ (function () {
    function Walking() {
    }
    Walking.prototype.getEta = function () {
        console.log("Calculating ETA (walking)");
        return 4;
    };
    Walking.prototype.getDestination = function () {
        console.log("Calculating Direction (walking)");
        return 4;
    };
    return Walking;
}());
exports.Walking = Walking;
