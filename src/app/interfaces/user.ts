import {BaseUser} from "./baseUser";

export class User implements BaseUser{
  email: string;
  id: string;
  password: string;
  username: string;
  roles: [id: number, name: string];

  constructor(user: BaseUser) {
    this.email = user.email;
    this.id = user.id;
    this.password = user.password;
    this.username = user.username;
    this.roles = user.roles
  }
}
