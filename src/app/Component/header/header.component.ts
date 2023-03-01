import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Tasks } from 'src/app/Models/Tasks/Tasks';
import { ApiService } from 'src/app/service/api.service';
import { TaskService } from 'src/app/service/task.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // tasksCount=0
  // allTasks:Tasks[]=[]
  // constructor(private _taskService:TaskService){
  // }
  // ngOnInit(){
  // this._taskService.getAll().subscribe((response: any) => {
  // let tasks=response as Tasks[]
  // tasks=response
  // this.tasksCount=tasks.length
  // })
  // }
  // getPendingTasks(): number {
  //   return this.allTasks.filter((task) => !task.isDone).length;
  // }
  isLoggedIn = false;
  selectedTask: Tasks = new Tasks();
  constructor(
    private _userService: UserService,
    private _apiService: ApiService,
    private _taskService: TaskService
  ) {}
  ngOnInit() {
    this.isLoggedIn=this._userService.isLoggedIn()
  }
}
