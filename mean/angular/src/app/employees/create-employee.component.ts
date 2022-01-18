import { Component, OnInit } from '@angular/core';
import {Employee } from '../models/employee.model';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = {
    id : 0,
    name : '0',
    gender : '0'
  };;
  constructor(private _route : ActivatedRoute,private _employeeService : EmployeeService) {
    this.ngOnInit();
   }

  ngOnInit(): void {
    this._route.paramMap.subscribe((parameterMap : ParamMap) => {
      const param=this._route.snapshot.paramMap.get('id');
      const id = param?+param:0;
      console.log("id for create component to be create or edit : ",id);
      //this.getEmployee(id);
      if(id ==0 ) {
        console.log('id is zero');
        this.employee = {
          id : 0,
          name : '0',
          gender : '0'
        };
      } else {
        console.log('id is non-zero ' , id);
        this._employeeService.getEmployee(id).subscribe((employee) => {
          //console.log(data);
          this.employee = employee;
          //this.employee.id = data.id;
          //this.employee.name = data.name;
          //this.employee.gender = data.gender;
          console.log("data is retrieved for edit");
          console.log(this.employee);
        },(err: any) => console.log(err));
      }
  
    });
  }

  private getEmployee(id: number) {
    if(id ==0 ) {
      console.log('id is zero');
      this.employee = {
        id : 0,
        name : '0',
        gender : '0'
      };
    } else {
      console.log('id is non-zero ' , id);
      this._employeeService.getEmployee(id).subscribe((employee) => {
        //console.log(data);
        this.employee = employee;
        //this.employee.id = data.id;
        //this.employee.name = data.name;
        //this.employee.gender = data.gender;
        console.log("data is retrieved for edit");
        console.log(this.employee);
      },(err: any) => console.log(err));
    }

  }

  saveEmployee() {
    if(this.employee.id == 0) {
      console.log("new employee : ");
      this._employeeService.getEmployees().subscribe((employeeData:Employee[])=> 
      { console.log('employeeData : ' + employeeData);
        const maxid = employeeData.reduce(function(e1,e2) {
          return (e1.id > e2.id) ? e1:e2
        }).id;
        this.employee.id = maxid + 1;
        console.log('this.employee.id return form server + 1 : ' + this.employee.id);
        this.addEmployee();
       });
       
      
    } else {
      this.updateEmployee();
    }
  }

  addEmployee() : void {
    console.log('add employee method from create component');

    console.log("employee : " + this.employee.id + this.employee.id + this.employee.name);

    this._employeeService.addEmployee(this.employee).subscribe((data) => {
      console.log(data);
    });

  }

  updateEmployee() : void {
    console.log('update employee method from create component');

    console.log("employee : " + this.employee.id + this.employee.name+this.employee.gender);

    this._employeeService.updateEmployee(this.employee).subscribe((data) => {
      console.log(data);
    });

  }

}
