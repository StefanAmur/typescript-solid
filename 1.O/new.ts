import { Cat } from './Model/Cat';
import { Dog } from './Model/Dog';
import { Parrot } from './Model/Parrot';
import { Fox } from './Model/Fox';
import { Zoo } from './Model/Zoo';
import { Animal } from './Model/Animal';

let zoo = new Zoo();
zoo.addAnimal(new Cat('Gru', 'Cat'));
zoo.addAnimal(new Dog('Max', 'Dog'));
zoo.addAnimal(new Parrot('Alfie', 'Parrot'));
zoo.addAnimal(new Fox('Beautiful Red', 'Fox'));

zoo.animals.forEach((animal: Animal) => {
  document.querySelector('#target').innerHTML +=
    animal.name + ' the ' + animal.species + ': ' + animal.makeSound() + '<br>';
});
