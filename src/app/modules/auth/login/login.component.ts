import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../../services/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }

  onSubmit(f: any): void {
    const {username , password} = f.value
    this.authService.login(username, password).pipe().subscribe(
      data => {
        this.tokenStorageService.saveToken(data.token);
            this.router.navigate(['../../dashboard/owner/list']);
      },
      err => {
        console.log(err.error.message)
      })
  }

}
