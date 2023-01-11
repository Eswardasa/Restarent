import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeishesComponent } from './deishes/deishes.component';
import { GoodforComponent } from './goodfor/goodfor.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { VisitComponent } from './visit/visit.component';

const routes: Routes = [{path:'Visit',component:VisitComponent},{path:'Login',component:LoginComponent},{path:'Signin',component:SigninComponent},
{path:'deishes',component:DeishesComponent},{path:'goodfor',component:GoodforComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
