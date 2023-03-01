import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/Models/Tasks/Tasks';
import { ApiService } from 'src/app/service/api.service';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  selectedTask:Tasks=new Tasks()
  constructor(private router: Router,
     private _activeRoute: ActivatedRoute ,private _apiService:ApiService,private _taskService:TaskService) {}
  ngOnInit() {
    this._activeRoute.paramMap.subscribe(params=>{
      let id:number= Number(params.get('id') )

    //   this._apiService.getById(`tasks`,id).subscribe(res=>{
    //  this.selectedTask=res
    //  console.log(this.selectedTask.title)
    //  console.log(this.selectedTask)
    //   })
this.getTaskById(id)
    })
  }
  getTaskById(id:number){
    this._taskService.getById(id).subscribe(res=>{
      this.selectedTask=res
      console.log(this.selectedTask)
     })
  }
}
