import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerSingleComponent } from './owner-single/owner-single.component';
import { OwnerAddComponent } from './owner-add/owner-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularMaterialModule} from "../../../angular-material/angular-material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { OwnerTableComponent } from './shared/owner-table/owner-table.component';
import { OwnerComponent } from './owner.component';
import {authInterceptorProviders} from "../../../interceptors/auth.interceptor";
import {OwnerService} from "../../../services/owner.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    OwnerListComponent,
    OwnerSingleComponent,
    OwnerAddComponent,
    OwnerTableComponent,
    OwnerComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //Material
    AngularMaterialModule,
    FlexLayoutModule
  ],
  providers: [authInterceptorProviders, OwnerService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OwnerModule { }
