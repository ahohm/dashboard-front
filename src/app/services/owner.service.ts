import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {OwnerRegisterRquest} from "../interfaces/ownerRegisterRquest";
import {Owner} from "../interfaces/owner";

const BASE_API = 'http://localhost:8080/api/owner';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  save(owner: OwnerRegisterRquest):Observable<any>{
    return this.http.post(BASE_API, {
      username : owner.username,
      email : owner.email
    }, httpOptions);
  }

  getAll(): Observable<Owner[]> {
    return this.http
      .get<Owner[]>(BASE_API)
      .pipe(map((owners: Owner[]) => owners.map(owner => new Owner(owner))));
  }
}
