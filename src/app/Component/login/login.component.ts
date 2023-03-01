import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form!: FormGroup;
  constructor(private _formBuilder: FormBuilder,private _userService:UserService,private router:Router) {}
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      Email: [
        '',
        [
          Validators.required,
          Validators.maxLength(40),
          Validators.minLength(5),
          Validators.pattern(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          ),
        ],
      ],
      Password: [
        '',
        [
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.required,
        ],
      ],
    });
  }
  isLogin() {
    console.log(this.form.value);
    // call API
    this._userService.login(this.form.controls['Email'].value)
    this.router.navigateByUrl('/tasks')

  }
  removePasswordValidators(){
this.form?.controls['Password'].setValidators([])
this.form?.controls['Password'].updateValueAndValidity()
  }
}
