import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EmployeeService } from './employees/employee.service';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';

const approutes : Routes = [
  {path: 'list' , 
  component: ListEmployeesComponent,
  resolve: {employeeList: EmployeeListResolverService}
},
  {path: 'edit/:id' , component: CreateEmployeeComponent},
  {path: '' , redirectTo: '/list' , pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(approutes),FormsModule,HttpClientModule
  ],
  providers: [EmployeeService,EmployeeListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
