import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Tasks } from '../Models/Tasks/Tasks';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient: HttpClient,private _userService:UserService) {}
  getHeaders():HttpHeaders{
    return new HttpHeaders({
      token:this._userService.getToken()
    })
  }
  getAll(url:string) :Observable<any> {
    return this._httpClient.get(`${environment.baseURL}${url}`);
  }
  getById(url:string,id:number) :Observable<any> {
    return this._httpClient.get(`${environment.baseURL}${url}${id}`);
  }
  post(url:string,body:any) :Observable<any> {
    return this._httpClient.post(`${environment.baseURL}${url}`,body);
  }
  put(url:string,body:any) :Observable<any> {
    return this._httpClient.put(`${environment.baseURL}${url}/${body.id}`,body);
  }
  delete(url:string,body:any) :Observable<any> {
    return this._httpClient.delete(`${environment.baseURL}${url}/${body}` )
  }

}
