import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";
import { OwnerModule } from './owner/owner.module';
import {SideBarComponent} from "../../components/side-bar/side-bar.component";
import {NavBarComponent} from "../../components/nav-bar/nav-bar.component";
import {LogoComponent} from "../../components/nav-bar/logo/logo.component";
import {AngularMaterialModule} from "../../angular-material/angular-material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {authInterceptorProviders} from "../../interceptors/auth.interceptor";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent,
    NavBarComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    OwnerModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


    //Material
    AngularMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
