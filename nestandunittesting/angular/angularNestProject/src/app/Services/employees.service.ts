import { Injectable } from '@angular/core'; 
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { EmployeeC } from '../employee-c';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  
  url: string ="http://localhost:3000/employee";

  constructor(private http: HttpClient) {}

  getAllEmployees() {
  
    return this.http.get(this.url).pipe(
      map(response => response)
  );
 
  }

  public getOne(id:any) {
  
  //   return this.http.get(`${this.url}/${id}`).pipe(
  //     map(response => response)
  // );
 
  return this.http.get(`${this.url}/${id}`);
  }



  public AddEmployee(details: EmployeeC){
    return this.http.post<EmployeeC>(`${this.url}`,details);
  }

  public updateContact(details: EmployeeC){
    return this.http.put<EmployeeC>(`${this.url}/${details._id}`, details);
  }

  public deleteEmployee(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

}
