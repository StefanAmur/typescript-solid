import { IAnimal } from './IAnimal';

export class Parrot implements IAnimal {
  private _name: string;

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  //   get type() {
  //     return 'Parrot';
  //   }

  public makeSound(): string {
    return "I'm a pirate, mate";
  }
}
