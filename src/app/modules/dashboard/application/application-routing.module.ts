import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApplicationListComponent} from "./application-list/application-list.component";
import {ApplicationSingleComponent} from "./application-single/application-single.component";

const routes: Routes = [
  { path: 'list', component: ApplicationListComponent },
  { path: 'single', component: ApplicationSingleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
