"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fox = void 0;
var Fox = /** @class */ (function () {
    function Fox() {
    }
    Object.defineProperty(Fox.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    //   get type() {
    //     return 'Fox';
    //   }
    Fox.prototype.makeSound = function () {
        return 'Raspy bark (according to google)';
    };
    return Fox;
}());
exports.Fox = Fox;
