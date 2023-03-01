import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Tasks } from '../Models/Tasks/Tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  constructor(private _httpClient: HttpClient) {}
  getAll() :Observable<any> {
    return this._httpClient.get(`${environment.baseURL}tasks`);
  }
  getById(id:number) :Observable<any> {
    return this._httpClient.get(`${environment.baseURL}tasks/${id}`);
  }
  create(task:Tasks) :Observable<any> {
    return this._httpClient.post(`${environment.baseURL}tasks`,task);
  }
  update(task:Tasks) :Observable<any> {
    return this._httpClient.put(`${environment.baseURL}tasks/${task.id}`,task);
  }
  delete(id:number) :Observable<any> {
    return this._httpClient.delete(`${environment.baseURL}/tasks/`+id)
  }

}
