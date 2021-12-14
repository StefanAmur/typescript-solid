import { Animal } from './Animal';

export class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  public makeSound(): string {
    return "Miauw-miauw at the door but once you open it, he/she doesn't go out";
  }
}
