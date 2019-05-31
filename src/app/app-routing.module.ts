import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListOfComponent } from './list-of/list-of.component';
import { MyDashboradComponent } from './my-dashborad/my-dashborad.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent}, 
  { path: 'dashboard',  component: MyDashboradComponent},
  { path: 'login',  component: LoginComponent},
  { path: '**', redirectTo: 'app' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
