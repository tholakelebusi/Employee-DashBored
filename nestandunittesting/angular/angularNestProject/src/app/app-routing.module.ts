import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NavBarComponent } from './components/navbar/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Nav', component:NavBarComponent },
  { path: 'Add', component: AddEmployeeComponent },
  { path: 'Edit/:id', component: EditEmployeeComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
