import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { Router } from '@angular/router';
import { EmployeeC } from 'src/app/employee-c';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  employees: any;
  product:any;
  id: any;

  constructor(public router: ActivatedRoute,private route: Router,public emplService:EmployeesService) { }

  ngOnInit() {
    this.router.params.subscribe(data=>{

      this.id=data.id;
    
    })

    this.emplService.getOne(this.id)
    .subscribe((employe) => {
      this.employees = employe
  
    }
   );
        }


  EditEmployee(edit:EmployeeC)
  {

    this.emplService.updateContact(edit).subscribe((result)=>{
   
    });
    
    this.route.navigate(['']);
  }
  }


   


