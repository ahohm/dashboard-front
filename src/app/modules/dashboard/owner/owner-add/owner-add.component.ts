import { Component, OnInit } from '@angular/core';
import {OwnerService} from "../../../../services/owner.service";
import {BaseOwnerRegisterRequest} from "../../../../interfaces/baseOwnerRegisterRequest";
import {Router} from "@angular/router";

@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent implements OnInit {

  constructor(private ownerService: OwnerService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f:any){
    const { username, email } = f.value;


    // @ts-ignore
    // @ts-ignore
    this.ownerService.save({username, email}).subscribe(
        data => {
          console.log(data);
          window.location.reload();
      },error => {
        console.log(error);
      }
    )
  }
}
