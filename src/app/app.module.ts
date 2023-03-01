import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './Component/Student/student.component';
import { TasksComponent } from './Component/tasks/tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Component/header/header.component';
import { CreateStudentComponent } from './Component/create-student/create-student.component';
import { CreateEmployeeComponent } from './Component/create-employee/create-employee.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HomeComponent } from './Component/home/home.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { DetailsComponent } from './Component/details/details.component';
import { MaxLengthPipe } from './pipe/max-length.pipe';
import { LoginComponent } from './Component/login/login.component';
import { LogoutComponent } from './Component/logout/logout.component';
import { FilterPipe } from './pipe/filter.pipe';
import { MobileNumberDirective } from './customDirective/mobile-number.directive';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TasksComponent,
    CreateStudentComponent,
    CreateEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    DetailsComponent,
    MaxLengthPipe,
    LoginComponent,
    LogoutComponent,
    FilterPipe,
    MobileNumberDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,ReactiveFormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
