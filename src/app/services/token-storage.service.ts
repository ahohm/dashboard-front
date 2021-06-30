import {Injectable} from '@angular/core';
import {BaseUser} from "../interfaces/baseUser";

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() {
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  removeItem(authToken: string): void{
    window.localStorage.removeItem(authToken);
    window.sessionStorage.removeItem(authToken);
  }

  public saveUser(user: BaseUser): void{
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): string | null{
    return JSON.parse(<string>sessionStorage.getItem(USER_KEY));
  }

}
