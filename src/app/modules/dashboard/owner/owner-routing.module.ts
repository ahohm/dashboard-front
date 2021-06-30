import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OwnerListComponent} from "./owner-list/owner-list.component";
import {OwnerSingleComponent} from "./owner-single/owner-single.component";
import {OwnerAddComponent} from "./owner-add/owner-add.component";
import {DashboardComponent} from "../dashboard.component";
import {OwnerComponent} from "./owner.component";

const routes: Routes = [


  {
    path:'',
    component: OwnerComponent,
    children:[
      {
        path: 'list',
        component: OwnerListComponent
      },
      {
        path: 'single',
        component: OwnerSingleComponent
      },
      {
        path: 'add',
        component: OwnerAddComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
