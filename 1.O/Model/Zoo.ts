import { IAnimal } from './IAnimal';

export class Zoo {
  private _animals: Array<Object> = new Array<Object>();

  public addAnimal(animal: IAnimal) {
    this._animals.push(animal);
  }

  get animals(): Array<Object> {
    return this._animals;
  }
}
