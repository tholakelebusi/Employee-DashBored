import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {EmployeesService} from './services/employees.service';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import {MatCardModule} from '@angular/material/card';  
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { ModalComponent } from './components/modal/modal/modal.component';

import { MatDialogModule } from '@angular/material/dialog';
import {ReactiveFormsModule  } from '@angular/forms';
import { EditModalComponent } from './components/modal/modal/Modals/editModal/edit-modal/edit-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ModalComponent,
    EditModalComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule 
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
