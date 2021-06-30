import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ApplicationRoutingModule} from './application-routing.module';
import {ApplicationListComponent} from './application-list/application-list.component';
import {ApplicationSingleComponent} from './application-single/application-single.component';
import {ApplicationTableComponent} from './shared/application-table/application-table.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularMaterialModule} from "../../../angular-material/angular-material.module";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    ApplicationListComponent,
    ApplicationSingleComponent,
    ApplicationTableComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    //Material
    AngularMaterialModule,
    FlexLayoutModule
  ]
})
export class ApplicationModule {
}
