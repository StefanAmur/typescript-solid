"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasOven = void 0;
var GasOven = /** @class */ (function () {
    function GasOven() {
    }
    GasOven.prototype.turnOn = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML +=
                '<p>' +
                    new Date().getHours() +
                    ':' +
                    new Date().getMinutes() +
                    ' : THE GAS IS ON!</p>';
        }, 1000);
        console.log('THE GAS IS ON!'); //insert fart humor here
        this._isOn = true;
    };
    GasOven.prototype.turnOff = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML +=
                '<p>' +
                    new Date().getHours() +
                    ':' +
                    new Date().getMinutes() +
                    ' : THE GAS IS OFF!</p><hr>';
        }, 3000);
        console.log('THE GAS IS OFF!');
        this._isOn = false;
    };
    GasOven.prototype.bake = function (item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML +=
                    '<p>' +
                        new Date().getHours() +
                        ':' +
                        new Date().getMinutes() +
                        ' : Now baking ' +
                        item +
                        ' !</p>';
            }, 2000);
            console.log('Now baking ' + item + '!');
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML +=
                    '<p>' +
                        new Date().getHours() +
                        ':' +
                        new Date().getMinutes() +
                        ' : there is no gas!</p>';
            }, 2000);
            console.log('there is no gas!');
        }
    };
    return GasOven;
}());
exports.GasOven = GasOven;
