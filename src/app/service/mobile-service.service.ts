import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileServiceService {
  [x: string]: any;

  constructor() { }
  validateMobile(mobile:any):boolean{
return true
  }
}
