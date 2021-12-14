"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parrot = void 0;
var Parrot = /** @class */ (function () {
    function Parrot() {
    }
    Object.defineProperty(Parrot.prototype, "name", {
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
    //     return 'Parrot';
    //   }
    Parrot.prototype.makeSound = function () {
        return "I'm a pirate, mate";
    };
    return Parrot;
}());
exports.Parrot = Parrot;
