"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas_1 = require("./Canvas");
var EraserTool_1 = require("./EraserTool");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        var canvas = new Canvas_1.Canvas();
        canvas.setCurrentTool(new EraserTool_1.EraserTool());
        canvas.mouseUp();
        canvas.mouseDown();
    };
    return Main;
}());
var newMain = new Main();
console.log(newMain.main());
