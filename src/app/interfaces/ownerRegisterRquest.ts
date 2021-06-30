import {BaseOwnerRegisterRequest} from "./baseOwnerRegisterRequest";

export class OwnerRegisterRquest implements BaseOwnerRegisterRequest{
  username: string;
  email: string;

  constructor(owner: BaseOwnerRegisterRequest) {
    this.username = owner.username;
    this.email = owner.email;
  }

}
