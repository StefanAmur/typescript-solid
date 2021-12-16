export interface IFacebookAuth {
  setFacebookToken(token: string);
  getFacebookLogin(token: string): boolean;
}
