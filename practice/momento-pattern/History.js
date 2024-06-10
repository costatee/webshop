"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
var History = /** @class */ (function () {
    function History() {
        this.states = [];
    }
    History.prototype.push = function (state) {
        this.states.push(state);
    };
    History.prototype.pop = function () {
        var lastIndex = this.states.length - 1;
        var lastState = this.states[lastIndex];
        this.states.pop();
        return lastState;
    };
    return History;
}());
exports.History = History;
