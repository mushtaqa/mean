import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import {Employee} from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  //selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit{
  employees : Employee[] /*= [
    {
      id:1,
      name: 'mark',
      gender: 'male'
    },
    {
        id:2,
        name: 'Mary',
        gender: 'Female'
    },
    {
        id:3,
        name: 'John',
        gender: 'Male'
    }
  ]*/;

  employee : Employee = {
    id : 0,
    name : '0',
    gender : '0'
  };;
  constructor(private _route: ActivatedRoute,private _router: Router, private _employeeService : EmployeeService) { 
          this.employees = this._route.snapshot.data['employeeList'];
          console.log("employeeList : " + this.employees);
          console.log(this.employees);
          /*this.employees.forEach((employeeEach)=> 
            {console.log("id : " + employeeEach.id + "name : " + employeeEach.name + "gender" + employeeEach.gender);
            
            });*/
        }

  ngOnInit(): void {
    /*console.log('ngOnInit from list employee from component called : ' );
    this._employeeService.getEmployees().subscribe
    ((employeeData:Employee[])=> 
    { console.log('employeeData : ' + employeeData);
    employeeData.forEach((employeeEach)=> 
    {console.log("gender" + employeeEach.gender);
    console.log("name" + employeeEach.name);
    })
      this.employees = employeeData
    });*/
    /*this.employees.forEach((employeeEach)=> 
    {console.log("gender 1" + employeeEach.gender);
    console.log("name 1" + employeeEach.name);
    });*/
    //console.log('employees : ' + JSON.parse(JSON.stringify(this.employees)));
     
  }

  editEmployee(id:number) {
    this._router.navigate(['/edit',id])
  }

  deleteEmployee(id:number) {
    this._employeeService.deleteEmployee(id).subscribe(
      () => console.log(`Employee with id = ${id} deleted`)
    );
  }

}
