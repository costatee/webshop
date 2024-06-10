"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transit_1 = require("./Transit");
var DirectionService = /** @class */ (function () {
    function DirectionService(travel) {
        this.travelMode = travel;
    }
    DirectionService.prototype.setTravelMode = function (travelMode) {
        this.travelMode = travelMode;
    };
    DirectionService.prototype.getTravelMode = function () {
        return this.travelMode;
    };
    DirectionService.prototype.getEta = function () {
        return this.travelMode.getEta();
    };
    DirectionService.prototype.getDirection = function () {
        return this.travelMode.getDestination();
    };
    return DirectionService;
}());
var test = new DirectionService(new Transit_1.Transit());
console.log(test.getEta());
console.log(test.getDirection());
