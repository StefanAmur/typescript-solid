export abstract class Animal {
  private _name: string;
  private _species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  set name(value) {
    this._name = value;
  }

  set species(value) {
    this._species = value;
  }

  get name() {
    return this._name;
  }

  get species() {
    return this._species;
  }

  abstract makeSound(): string;
}
