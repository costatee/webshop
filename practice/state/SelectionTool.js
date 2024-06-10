"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionTool = void 0;
var SelectionTool = /** @class */ (function () {
    function SelectionTool() {
    }
    SelectionTool.prototype.mouseDown = function () {
        console.log('Selection Icon');
    };
    SelectionTool.prototype.mouseUp = function () {
        console.log('Draw a dashed line');
    };
    return SelectionTool;
}());
exports.SelectionTool = SelectionTool;
