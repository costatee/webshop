"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
var EditorState_1 = require("./EditorState");
var Editor = /** @class */ (function () {
    function Editor() {
    }
    //createState
    Editor.prototype.createState = function () {
        return new EditorState_1.EditorState(this.content);
    };
    //restore
    Editor.prototype.restore = function (state) {
        this.content = state.getContent();
    };
    Editor.prototype.getContent = function () {
        return this.content;
    };
    Editor.prototype.setContent = function (content) {
        this.content = content;
    };
    return Editor;
}());
exports.Editor = Editor;
