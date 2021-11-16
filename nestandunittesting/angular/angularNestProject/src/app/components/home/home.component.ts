import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { ModalComponent } from '../modal/modal/modal.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employees: any;
  selected: any;

  constructor(public employeesService:EmployeesService,
    public matDialog: MatDialog,
    public router:Router) { }

  ngOnInit(): void {

    this.employeesService
      .getAllEmployees()
      .subscribe((employe) => {
        this.employees = employe
      }
     );
     this.deleteEmployee
  }

  deleteEmployee(id:any){
    this.employeesService.deleteEmployee(id).subscribe((result)=>{
    });
    this.router.navigate(['']);
  }


  Edit(id:any) {
    this.selected=id;
  this.router.navigateByUrl('Edit/'+id, { state:id });
  }


  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }

  openModals(id:any) {
    localStorage.setItem("id",id);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "500px";

    const modalDialog = this.matDialog.open(EditEmployeeComponent, dialogConfig);
  }

}
