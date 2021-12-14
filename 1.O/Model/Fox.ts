import { IAnimal } from './IAnimal';

export class Fox implements IAnimal {
  private _name: string;

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  //   get type() {
  //     return 'Fox';
  //   }

  public makeSound(): string {
    return 'Raspy bark (according to google)';
  }
}
