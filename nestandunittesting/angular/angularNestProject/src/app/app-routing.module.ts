import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NavBarComponent } from './components/navbar/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { ModalComponent } from './components/modal/modal/modal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Nav', component:NavBarComponent },
  { path: 'Add', component: AddEmployeeComponent },
  { path: 'Edit/:id', component: EditEmployeeComponent },
  {path:'modal',component:ModalComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
