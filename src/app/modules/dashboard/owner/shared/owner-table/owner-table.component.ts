import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Owner} from "../../../../../interfaces/owner";
import {OwnerService} from "../../../../../services/owner.service";

@Component({
  selector: 'app-owner-table',
  templateUrl: './owner-table.component.html',
  styleUrls: ['./owner-table.component.css']
})
export class OwnerTableComponent implements OnInit {

  owners: any ;
  displayedColumns: string[] = ['username', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private ownerService: OwnerService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  ngOnInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;

    this.getAllOwners()
  }

  getAllOwners(){
    // @ts-ignore
    // @ts-ignore
    this.ownerService.getAll().subscribe(
      (data: Owner[])=> {
        this.owners = data;


        this.dataSource = new MatTableDataSource<Owner>(this.owners);
      },error => {
        console.log(error);
      }
    );
  }

}

export interface UserElement {
  name: string;
  position: number;
  email: string;
}

const ELEMENT_DATA: Owner[] = [
  // { position: 1, name: 'John', email: 'john@gmail.com' },
  // { position: 2, name: 'Herry', email: 'herry@gmail.com' },
  // { position: 3, name: 'Ann', email: 'ann@gmail.com' },
  // { position: 4, name: 'Johnny', email: 'johnny@gmail.com' },
  // { position: 5, name: 'Roy', email: 'roy@gmail.com' },
  // { position: 6, name: 'Kia', email: 'kia@gmail.com' },
  // { position: 7, name: 'Merry', email: 'merry@gmail.com' },
  // { position: 8, name: 'William', email: 'william@gmail.com' },
  // { position: 9, name: 'Shia', email: 'shia@gmail.com' },
  // { position: 10, name: 'Kane', email: 'kane@gmail.com' }
];
