import {Employee} from '../models/employee.model';
export class ResolvedEmploeeList {
    constructor(public employeeList: Employee[], public error: any = null) {}
}