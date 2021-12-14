import { Animal } from './Animal';

export class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  public makeSound(): string {
    return "Woof-woof, who's a good boy?";
  }
}
