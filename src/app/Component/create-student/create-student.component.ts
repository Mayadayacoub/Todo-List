import { Component } from '@angular/core';
import { MobileServiceService } from 'src/app/service/mobile-service.service';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent {

constructor(private mobileService:MobileServiceService){

}
  addNewStudent(name: string, mobile: string) {
    // Add New Student
this.mobileService.validateMobile(mobile)
  }
}
