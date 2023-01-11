"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = "black";
        this.filled = false;
        this.color = color;
        this.filled = filled;
    }
    Shape.prototype.getcolor = function () {
        return this.color;
    };
    Shape.prototype.setcolor = function (color) {
        this.color = color;
    };
    Shape.prototype.getfilled = function () {
        return this.filled;
    };
    Shape.prototype.setfilled = function (filled) {
        this.filled = filled;
    };
    Shape.prototype.fill = function () {
        if (this.filled == true) {
            return "filled";
        }
        else if (this.filled == false) {
            return "not filled";
        }
    };
    Shape.prototype.toString = function () {
        return "A Shape with color of " + this.color + " and " + this.fill();
    };
    return Shape;
}());
exports.Shape = Shape;
