export interface IBasicAuth {
  checkPassword(password: string): boolean;
  resetPassword();
}
