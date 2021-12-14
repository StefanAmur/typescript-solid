"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cat_1 = require("./Model/Cat");
var Dog_1 = require("./Model/Dog");
var Parrot_1 = require("./Model/Parrot");
var Fox_1 = require("./Model/Fox");
var Zoo_1 = require("./Model/Zoo");
var zoo = new Zoo_1.Zoo();
zoo.addAnimal(new Cat_1.Cat('Gru', 'Cat'));
zoo.addAnimal(new Dog_1.Dog('Max', 'Dog'));
zoo.addAnimal(new Parrot_1.Parrot('Alfie', 'Parrot'));
zoo.addAnimal(new Fox_1.Fox('Beautiful Red', 'Fox'));
zoo.animals.forEach(function (animal) {
    document.querySelector('#target').innerHTML +=
        animal.name + ' the ' + animal.species + ': ' + animal.makeSound() + '<br>';
});
