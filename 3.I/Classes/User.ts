import { IBasicAuth } from '../Interfaces/IBasicAuth';
import { IGoogleAuth } from '../Interfaces/IGoogleAuth';
import { IFacebookAuth } from '../Interfaces/IFacebookAuth';

export class User implements IBasicAuth, IGoogleAuth, IFacebookAuth {
  private _password: string = 'user';
  private _facebookToken: string;
  private _googleToken: string;

  //Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
  // Test it out by uncommenting the code below.
  checkPassword(password: string): boolean {
    return password === this._password;
  }

  resetPassword() {
    this._password = prompt('What is your new password?');
  }

  checkGoogleLogin(token: string) {
    // return "this will not work";
    return token === this._googleToken;
  }

  setGoogleToken(token: string) {
    this._googleToken = token;
  }

  getFacebookLogin(token: string) {
    return token === this._facebookToken;
  }

  setFacebookToken(token: string) {
    this._facebookToken = token;
  }
}
