import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children:[
      {
        path:'owner',
        loadChildren: () => import('./owner/owner.module').then(mod=>mod.OwnerModule)
      },
      {
        path:'application',
        loadChildren: () => import('./application/application.module').then(mod=>mod.ApplicationModule)
      },
      {
        path:'lock',
        loadChildren: () => import('./application/application.module').then(mod=>mod.ApplicationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
