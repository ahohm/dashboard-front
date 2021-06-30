import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: 'dashboard',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(mod=>mod.DashboardModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(mod=>mod.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
