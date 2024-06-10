"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrushTool = void 0;
var BrushTool = /** @class */ (function () {
    function BrushTool() {
    }
    BrushTool.prototype.mouseDown = function () {
        console.log('Brush Icon');
    };
    BrushTool.prototype.mouseUp = function () {
        console.log('Draw a line');
    };
    return BrushTool;
}());
exports.BrushTool = BrushTool;
