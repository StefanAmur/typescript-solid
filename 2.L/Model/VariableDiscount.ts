import { IDiscount } from './IDiscount';

export class VariableDiscount implements IDiscount {
  private _value: number;

  constructor(value: number) {
    this._value = value;

    if (value <= 0) {
      throw new Error(
        'You cannot create a variable discount with a negative value'
      );
    }
  }

  apply(price: number): number {
    return price - (price * this._value) / 100;
  }

  showCalculation(price: number): string {
    return price + ' € -  ' + this._value + '%';
  }
}
