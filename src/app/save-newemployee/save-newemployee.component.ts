/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-save-newemployee',
  templateUrl: './save-newemployee.component.html',
  styleUrls: ['./save-newemployee.component.css']
})
export class SaveNewemployeeComponent implements OnInit {

  employee : Employee = new Employee();
  
  constructor(private employeeService:EmployeeService,
    private router:Router) { }

  
  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.goToEmployeeList();
      
    })
    //(error:any)=>this.errorMessage=<any>error
  
    
  }
    
  goToEmployeeList(){
    this.router.navigate(['/employees'])

  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();

  }
}
