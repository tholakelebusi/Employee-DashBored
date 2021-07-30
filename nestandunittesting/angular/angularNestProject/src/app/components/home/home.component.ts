import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employees: any;
  selected:any;

  constructor(public employeesService:EmployeesService,public router:Router) { }

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

}
