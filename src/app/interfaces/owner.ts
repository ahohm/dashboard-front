import {BaseOwner} from "./baseOwner";
import {BaseOrganization} from "./baseOrganization";
import {Organization} from "./organization";
import {Lock} from "./lock";

export class Owner implements BaseOwner {

  affiliation: string;
  email: string;
  id: string;
  imageUrl: string;
  lockzs: [Lock];
  mailVerified: string;
  organization: Organization;
  password: string;
  phoneNumber: string;
  username: string;


  constructor(owner: BaseOwner) {
    this.affiliation = owner.affiliation;
    this.email = owner.email;
    this.id = owner.id;
    this.imageUrl = owner.imageUrl;
    this.lockzs = owner.lockzs;
    this.mailVerified = owner.mailVerified;
    this.organization = owner.organization;
    this.password = owner.password;
    this.phoneNumber = owner.phoneNumber;
    this.username = owner.username;
  }
}
