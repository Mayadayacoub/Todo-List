import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
isLoggedIn=false
constructor(private _userService:UserService){

}
ngOnInit(){
  this.isLoggedIn=this._userService.isLoggedIn()
}
}
