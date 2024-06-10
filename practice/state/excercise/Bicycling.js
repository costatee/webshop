"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicycling = void 0;
var Bicycling = /** @class */ (function () {
    function Bicycling() {
    }
    Bicycling.prototype.getEta = function () {
        console.log("Calculating ETA (bicycling)");
        return 2;
    };
    Bicycling.prototype.getDestination = function () {
        console.log("Calculating Direction (bicycling)");
        return 2;
    };
    return Bicycling;
}());
exports.Bicycling = Bicycling;
