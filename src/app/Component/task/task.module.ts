import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from '../tasks/tasks.component';


const routes:Routes=[
  {
path:'tasks',component:TasksComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TaskModule { }
