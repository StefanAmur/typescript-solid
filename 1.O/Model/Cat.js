"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
// import { IAnimal } from './IAnimal';
var Animal_1 = require("./Animal");
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    //   private _name: string;
    //   private _species: string;
    function Cat(name, species) {
        return _super.call(this, name, species) || this;
    }
    //   set name(value) {
    //     this._name = value;
    //   }
    //   set species(value) {
    //     this._species = value;
    //   }
    //   get name() {
    //     return this._name;
    //   }
    //   get species() {
    //     return this._species;
    //   }
    //   get type(): string {
    //     return 'Cat';
    //   }
    Cat.prototype.makeSound = function () {
        return "Miauw-miauw at the door but once you open it, he/she doesn't go out";
    };
    return Cat;
}(Animal_1.Animal));
exports.Cat = Cat;
