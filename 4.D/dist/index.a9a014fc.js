var GasOven1 = function() {
    function GasOven() {
    }
    GasOven.prototype.turnOn = function() {
        setTimeout(function() {
            document.getElementById('target').innerHTML += '<p>' + new Date().getHours() + ':' + new Date().getMinutes() + ' : THE GAS IS ON!</p>';
        }, 1000);
        console.log('THE GAS IS ON!'); //insert fart humor here
        this._isOn = true;
    };
    GasOven.prototype.turnOff = function() {
        setTimeout(function() {
            document.getElementById('target').innerHTML += '<p>' + new Date().getHours() + ':' + new Date().getMinutes() + ' : THE GAS IS OFF!</p><hr>';
        }, 3000);
        console.log('THE GAS IS OFF!'); //insert fart humor here
        this._isOn = false;
    };
    GasOven.prototype.bake = function(item) {
        if (this._isOn) {
            setTimeout(function() {
                document.getElementById('target').innerHTML += '<p>' + new Date().getHours() + ':' + new Date().getMinutes() + ' : Now baking ' + item + ' !</p>';
            }, 2000);
            console.log('Now baking ' + item + '!');
        } else {
            setTimeout(function() {
                document.getElementById('target').innerHTML += '<p>' + new Date().getHours() + ':' + new Date().getMinutes() + ' : there is no gas!</p>';
            }, 2000);
            console.log('there is no gas!'); //insert fart humor here
        }
    };
    return GasOven;
}();
var Restaurant1 = function() {
    function Restaurant(name, oven) {
        this._name = name;
        this._oven = oven;
    }
    Restaurant.prototype.Cook = function(item) {
        this._oven.turnOn();
        this._oven.bake(item);
        this._oven.turnOff();
    };
    return Restaurant;
}();
var bakery = new Restaurant1('Bakery', new GasOven1());
bakery.Cook('cookies'); //Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
 /*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");
 */ 

//# sourceMappingURL=index.a9a014fc.js.map
