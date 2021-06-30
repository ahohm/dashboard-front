import { Component, OnInit } from '@angular/core';
import {OwnerService} from "../../../../services/owner.service";
import {Owner} from "../../../../interfaces/owner";

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  private owners : Owner[] | undefined ;

  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
    this.getAllOwners();
  }

  getAllOwners(){
    // @ts-ignore
    // @ts-ignore
    this.ownerService.getAll().subscribe(
      (data: Owner[])=> {
        this.owners = data;
      },error => {
        console.log(error);
      }
    );
  }

}
