var __extends = this && this.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var Zoo1 = function() {
    function Zoo() {
        this._animals = new Array();
    //   public makeSound(animal: object): string {
    //     switch (animal.type) {
    //       case 'cat':
    //         return 'Miauw';
    //       case 'dog':
    //         return 'Woef';
    //       case 'parrot':
    //         return 'I am a pirate';
    //       default:
    //         throw new Error('Unknown type: ' + animal.type);
    //     }
    //   }
    }
    Zoo.prototype.addAnimal = function(animal) {
        this._animals.push(animal);
    };
    Object.defineProperty(Zoo.prototype, "animals", {
        get: function() {
            return this._animals;
        },
        enumerable: false,
        configurable: true
    });
    return Zoo;
}();
var Dog1 = function(_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function() {
            return this._name;
        },
        set: function(value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "type", {
        get: function() {
            return 'dog';
        },
        enumerable: false,
        configurable: true
    });
    Dog.prototype.makeSound = function(animal) {
        return 'Woef';
    };
    return Dog;
}(Zoo1);
var Cat1 = function(_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Cat.prototype, "name", {
        get: function() {
            return this._name;
        },
        set: function(value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "type", {
        get: function() {
            return 'Cat';
        },
        enumerable: false,
        configurable: true
    });
    Cat.prototype.makeSound = function(animal) {
        return 'Miauw';
    };
    return Cat;
}(Zoo1);
var Parrot1 = function(_super) {
    __extends(Parrot, _super);
    function Parrot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Parrot.prototype, "name", {
        get: function() {
            return this._name;
        },
        set: function(value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parrot.prototype, "type", {
        get: function() {
            return 'parrot';
        },
        enumerable: false,
        configurable: true
    });
    Parrot.prototype.makeSound = function(animal) {
        return "I'm a pirate";
    };
    return Parrot;
}(Zoo1);
var Lion1 = function() {
    function Lion() {
    }
    Object.defineProperty(Lion.prototype, "name", {
        get: function() {
            return this._name;
        },
        set: function(value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lion.prototype, "type", {
        get: function() {
            return 'pLion';
        },
        enumerable: false,
        configurable: true
    });
    Lion.prototype.makeSound = function(animal) {
        return 'Roooooar';
    };
    return Lion;
}();
var zoo = new Zoo1();
zoo.addAnimal(new Cat1());
zoo.addAnimal(new Dog1());
zoo.addAnimal(new Parrot1());
zoo.addAnimal(new Lion1());
// console.log(zoo);
// console.log(zoo.Cat.makeSound());
zoo.animals.forEach(function(animal) {
    document.querySelector('#target').innerHTML += animal.type + ': ' + animal.makeSound() + '<br>';
}); // zoo.animals.forEach((element) => {
 //   console.log(element);
 //   document.querySelector('#target').innerHTML += this.element.name() + '<br>';
 // });
 // zoo.animals.forEach((animal) => {
 //   document.querySelector('#target').innerHTML +=
 //     this.animal.type + ': ' + this.animal.makeSound(animal) + '<br>';
 // });

//# sourceMappingURL=index.ac17ba37.js.map
