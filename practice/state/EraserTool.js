"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EraserTool = void 0;
var EraserTool = /** @class */ (function () {
    function EraserTool() {
    }
    EraserTool.prototype.mouseDown = function () {
        console.log('ERASER TOOL');
    };
    EraserTool.prototype.mouseUp = function () {
        console.log('Erasing Something');
    };
    return EraserTool;
}());
exports.EraserTool = EraserTool;
