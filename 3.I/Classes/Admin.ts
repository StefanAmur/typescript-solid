import { IBasicAuth } from '../Interfaces/IBasicAuth';

export class Admin implements IBasicAuth {
  private _password: string = 'admin';

  checkPassword(password: string): boolean {
    return password === this._password;
  }

  resetPassword() {
    this._password = prompt('What is your new password?');
  }
}
