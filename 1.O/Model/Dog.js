"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
var Dog = /** @class */ (function () {
    function Dog(name, species) {
        this.name = name;
        this.species = species;
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            this._species = value;
        },
        enumerable: false,
        configurable: true
    });
    Dog.prototype.makeSound = function () {
        return "Woof-woof, who's a good boy?";
    };
    return Dog;
}());
exports.Dog = Dog;
