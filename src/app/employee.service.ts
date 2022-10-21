import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


private baseURL="http://localhost:8085/api/employees";
private baseurl="http://localhost:8085/api/addemployees";

  constructor(private httpClient:HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseURL);
  }
  
  createEmployee(employee:Employee): Observable<object>{
    
    return this.httpClient.post((this.baseurl), employee);
  }

}



