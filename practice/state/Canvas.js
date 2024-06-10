"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
var Canvas = /** @class */ (function () {
    function Canvas() {
    }
    Canvas.prototype.mouseUp = function () {
        this.currenTool.mouseDown();
    };
    Canvas.prototype.mouseDown = function () {
        this.currenTool.mouseUp();
    };
    Canvas.prototype.getCurrentTool = function () {
        return this.currenTool;
    };
    Canvas.prototype.setCurrentTool = function (tool) {
        this.currenTool = tool;
    };
    return Canvas;
}());
exports.Canvas = Canvas;
