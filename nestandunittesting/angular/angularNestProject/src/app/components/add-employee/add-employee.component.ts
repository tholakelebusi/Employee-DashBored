import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeC } from 'src/app/employee-c';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employees: any;




  constructor(private empService:EmployeesService,public route:Router) { }

  ngOnInit(): void {
    this.empService
    .getAllEmployees()
    .subscribe((employe) => {
      this.employees = employe
    
    }
   );
  }

  createEmployee(add:EmployeeC){
    this.empService.AddEmployee(add).subscribe((result)=>{
    
    });
    this.route.navigate(['']);
  }
}
