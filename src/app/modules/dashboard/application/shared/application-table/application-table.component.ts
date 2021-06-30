import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-application-table',
  templateUrl: './application-table.component.html',
  styleUrls: ['./application-table.component.css']
})
export class ApplicationTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  ngOnInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
  }

}

export interface UserElement {
  name: string;
  position: number;
  email: string;
}

const ELEMENT_DATA: UserElement[] = [
  { position: 1, name: 'John', email: 'application@gmail.com' },
  { position: 2, name: 'Herry', email: 'herry@gmail.com' },
  { position: 3, name: 'Ann', email: 'ann@gmail.com' },
  { position: 4, name: 'Johnny', email: 'johnny@gmail.com' },
  { position: 5, name: 'Roy', email: 'roy@gmail.com' },
  { position: 6, name: 'Kia', email: 'kia@gmail.com' },
  { position: 7, name: 'Merry', email: 'merry@gmail.com' },
  { position: 8, name: 'William', email: 'william@gmail.com' },
  { position: 9, name: 'Shia', email: 'shia@gmail.com' },
  { position: 10, name: 'Kane', email: 'kane@gmail.com' }
];
