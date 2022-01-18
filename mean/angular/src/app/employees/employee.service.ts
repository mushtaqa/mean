import { Injectable } from "@angular/core";
import {Employee} from '../models/employee.model'
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, throwError ,of} from "rxjs";



@Injectable()
export class EmployeeService {
    returnlistemployees : Observable<any> = new Observable();
    constructor(private _httpclient : HttpClient) {}
    baseURL = 'http://localhost:3000/Posts/';

    employees : Employee[] = [
        /*{
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
        }*/
      ];

    getEmployees() : Observable<Employee[]> {
        console.log('employee service called');
        //return of(this.listemployees);
        return this._httpclient.get<Employee[]>(`${this.baseURL}list`)
        //.pipe(catchError(this.handleError));
        return of(this.employees);

    }

    private handleError(errorResponse : HttpErrorResponse) {
        if(errorResponse.error instanceof ErrorEvent) {
            console.error('Client side Error: ' , errorResponse.error.message);
        } else {
            console.error('Server side Error: ', errorResponse);
        }
        //eturn new ErrorObservable('there is a problem with the service. We are notified');
        return throwError('there is a problem with the service. We are notifie. try after later')
    }

    addEmployee(employee : Employee) : Observable<Employee> {
        console.log('employee service add method called');
            return this._httpclient.post<Employee>(`${this.baseURL}add`,employee , {
                headers : new HttpHeaders({
                    'content-type' : 'application/json'
                })
            });
    }

    updateEmployee(employee : Employee) : Observable<void> {
        console.log('employee service update method called');
        console.log(employee);
        console.log(employee.id+(+employee.name) + (+employee.gender));
        console.log(typeof(employee));
        
        return this._httpclient.patch<void>(`${this.baseURL}/update/${employee.id}` ,employee , {
            headers : new HttpHeaders({
                'content-type' : 'application/json'
            })

        });

    }

    getEmployee(id : number) : Observable<Employee> {
        console.log('employee service update method called');
        return this._httpclient.get<Employee>(`${this.baseURL}/list/${id}`);
      
    }

    deleteEmployee(id : number) : Observable<Employee> {
        console.log('employee service delete method called ',id);
        return this._httpclient.delete<Employee>(`${this.baseURL}/delete/${id}`);
    }
}