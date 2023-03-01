import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Tasks } from 'src/app/Models/Tasks/Tasks';
import { ApiService } from 'src/app/service/api.service';
import { TaskService } from 'src/app/service/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  allTasks: Tasks[] = [];
  searchText = '';
  isLoadingData = true;
  @ViewChild('inputTitle')
  inputTitle!: { nativeElement: { value: string } };
  constructor(
    private _taskService: TaskService,
    private _apiService: ApiService,
    private _httpClient:HttpClient,
    private route:ActivatedRoute
  ) {}
  ngOnInit() {
    this._apiService.getAll(`tasks`).subscribe((response: any) => {
      console.log(response, 'ngoninit');
      this.allTasks = response;
      this.isLoadingData = false;
      console.log(response)
    });

  }
  getPendingTasks(): number {
    return this.allTasks.filter((task) => !task.isDone).length;
  }
  addTask(title: any) {
    let newTask = new Tasks();
    newTask.title = title;
// this._httpClient.post('http://localhost:3000/tasks',newTask).subscribe(response=>{
//   console.log(response)
// this.allTasks.push(newTask)
// })

    this._apiService.post(`tasks`,newTask).subscribe((response: any) => {
      newTask= response
      this.allTasks.push(newTask);

    });
    this.inputTitle.nativeElement.value = '';
  }

  deletedTask(index: number) {
    let task = this.allTasks[index];
    this._apiService.delete(`tasks`,task.id).subscribe((response: any) => {
      this.allTasks.splice(index, 1);
    });
  }

  updateTask(task: Tasks) {
    task.isDone = !task.isDone;
    this._apiService.put(`tasks`,task).subscribe((response: any) => {
      let indexToUpdate = this.allTasks.findIndex(
        (item) => item.id === task.id
      );
      this.allTasks[indexToUpdate] = task;
      task = response
      this.allTasks = Object.assign([], this.allTasks);
      console.log(this.allTasks)
    });
  }
  handleCancel(){
    this.inputTitle.nativeElement.value = '';
  }
}
