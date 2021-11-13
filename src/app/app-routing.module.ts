import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/pages/home/home.component';
import {PatientComponent}from '../app/pages/patient/patient.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
    
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'patient',
    component:PatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
