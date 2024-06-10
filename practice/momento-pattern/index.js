"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var editor_1 = require("./Editor");
var History_1 = require("./History");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        var editor = new editor_1.Editor();
        var history = new History_1.History();
        editor.setContent('a');
        history.push(editor.createState());
        editor.setContent('b');
        history.push(editor.createState());
        editor.setContent('c');
        editor.restore(history.pop());
        editor.restore(history.pop());
        console.log(editor.getContent());
    };
    return Main;
}());
var newMain = new Main();
console.log('RUNNING');
console.log(newMain.main());
