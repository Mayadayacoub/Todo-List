import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private _userService:UserService, private router:Router){}
ngOnInit():void{
  this._userService.logout()
  this.router.navigateByUrl('/login')
}
}
