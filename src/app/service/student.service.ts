import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Tasks } from '../Models/Tasks/Tasks';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient: HttpClient) {}
  getAll() :Observable<any> {
    return this._httpClient.get(`${environment.baseURL}/student`);
  }
  create(task:Tasks) :Observable<any> {
    return this._httpClient.post(`${environment.baseURL}/student`,task);
  }
  update(task:Tasks) :Observable<any> {
    return this._httpClient.put(`${environment.baseURL}/student`,task);
  }
  delete(id:number) :Observable<any> {
    return this._httpClient.delete(`${environment.baseURL}/student`+id)
  }
}
