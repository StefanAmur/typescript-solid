import { Cat } from './Model/Cat';
import { Dog } from './Model/Dog';
import { Parrot } from './Model/Parrot';
import { Fox } from './Model/Fox';
import { Zoo } from './Model/Zoo';
import { IAnimal } from './Model/IAnimal';

let zoo = new Zoo();
zoo.addAnimal(new Cat('Gru', 'Cat'));
zoo.addAnimal(new Dog('Max', 'Dog'));
zoo.addAnimal(new Parrot());
zoo.addAnimal(new Fox());

zoo.animals.forEach((animal: IAnimal) => {
  document.querySelector('#target').innerHTML +=
    animal.name + ': ' + animal.makeSound() + '<br>';
});

// zoo.animals.forEach((element) => {
//   console.log(element);

//   document.querySelector('#target').innerHTML += this.element.name() + '<br>';
// });

// zoo.animals.forEach((animal) => {
//   document.querySelector('#target').innerHTML +=
//     this.animal.type + ': ' + this.animal.makeSound(animal) + '<br>';
// });
