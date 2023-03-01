import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loginStatus=new BehaviorSubject<boolean>(this.isLoggedIn())
  constructor() {}
  getToken():string {
    return '3747747757'
  }
  login(email: string) {
    localStorage.setItem('Email', email);
    this.loginStatus.next(false)
  }
  logout() {
    localStorage.removeItem('Email');
    this.loginStatus.next(true)
  }
  isLoggedIn(): boolean {
    let email=localStorage.getItem('Email')
    return email!=null
  }
}
