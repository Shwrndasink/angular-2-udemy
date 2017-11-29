import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'employeeName'
})
export class EmployeeNamePipe implements PipeTransform {

  // This method accepts an Employee Object.
  transform(value: Employee, args?: any): any {
    return `The salary of ${value.firstName} ${value.lastName} is ${value.salary}` ;
  }

}
