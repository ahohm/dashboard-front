import {BaseOrganization} from "./baseOrganization";

export class Organization implements BaseOrganization{
  Domain: string;
  id: number;
  name: string;


  constructor(org: BaseOrganization) {
    this.Domain = org.Domain;
    this.id = org.id;
    this.name = org.name;
  }
}
