import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './Component/create-student/create-student.component';
import { DetailsComponent } from './Component/details/details.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { LogoutComponent } from './Component/logout/logout.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { TasksComponent } from './Component/tasks/tasks.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tasks', component: TasksComponent,canActivate:[AuthenticationGuard] },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'createStudent', component: CreateStudentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
