import { IGoogleAuth } from '../Interfaces/IGoogleAuth';

export class GoogleBot implements IGoogleAuth {
  private _googleToken: string;

  checkGoogleLogin(token) {
    return token === this._googleToken;
  }

  setGoogleToken(token: string) {
    this._googleToken = token;
  }
}
