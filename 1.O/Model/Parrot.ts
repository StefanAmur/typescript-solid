import { Animal } from './Animal';

export class Parrot extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  public makeSound(): string {
    return "I'm a pirate, mate";
  }
}
