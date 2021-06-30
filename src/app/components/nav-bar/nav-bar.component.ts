import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private isLoggedIn: boolean= false;
  private roles: any;
  private showAdminDashboard: boolean = false;

  constructor(public authService: AuthService,
              private dialog:MatDialog,
              private router: Router,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn){
      const user: User = JSON.parse(<string>this.tokenStorageService.getUser());
      this.roles = user.roles;
      this.showAdminDashboard = this.roles.include('ROLE_ADMIN');

    }
  }



  @Output() changeState = new EventEmitter<boolean>();
  opened: boolean | undefined;
  userDetails = null;
  user: Array<any> = [];

  changeEvent() {
    this.changeState.emit(!this.opened);
    this.opened = !this.opened;
  }

  signout(){
    this.tokenStorageService.signOut()
    this.router.navigate(["auth/login"])
  }

}
