import { Component, ViewChild } from '@angular/core';
import {Employee } from '../../Models/employee/employee.model'
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @ViewChild('lastName') inputLastName: any;
  @ViewChild('firstName') inputFirstName: any;

  employees:Employee[]=[]



constructor(){

}

ngOnInit(){

}

addEmployee(firstName:string,lastName:string):void{

let employee=new Employee()
employee.firstName=firstName
employee.lastName=lastName

this.employees.push(employee)
console.log(this.employees)
this.inputLastName.nativeElement.value=''
this.inputFirstName.nativeElement.value=''

}
// deleteEmployee(index:any){
// console.log(index)
// this.employees.splice(this.employees.indexOf(index),1)
// }
getAgeClass(age:number){
  if(age >30)
  {return 'red'}
  else {
    return 'green'
  }
}
getEmployeeCount(){
  console.log(this.employees)
  return this.employees.length
}
// updateFirstName(firstName:string){
//   this.employee.firstName=firstName
// }

deleteEmployee(index:any){
return this.employees.splice(index,1)
}
}
