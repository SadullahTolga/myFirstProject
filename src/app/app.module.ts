import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CandidateComponent } from './features/candidate/candidate/candidate.component';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateAddComponent } from './features/candidate/candidate-add/candidate-add/candidate-add.component';
import { HeadingNaviComponent } from './features/navi/heading-navi/heading-navi/heading-navi.component';
import { EmployeesComponent } from './features/employees/employees/employees/employees.component';
import { EmployeesAddComponent } from './features/employees/employees-add/employees-add/employees-add.component';
import { UserLoginComponent } from './features/login/userLogin/user-login-employer/user-login.component';
import { DepartmentAddComponent } from './features/departmentAdd/department/department.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddComponent } from './features/add/add/add.component';
import { NaviUserInfoComponent } from './features/navi/navi-user-info/navi-user-info/navi-user-info.component';
import { TinjobComponent } from './features/navi/tinjob/tinjob/tinjob.component';
import { JobAdvertisementAddComponent } from './features/job/jobAdvertisementAdd/job-advertisement-add/job-advertisement-add.component';
import { JobAdvertisementComponent } from './features/job/jobAdvertisement/job-advertisement/job-advertisement.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    CandidateAddComponent,
    HeadingNaviComponent,
    EmployeesComponent,
    EmployeesAddComponent,
    UserLoginComponent,
    DepartmentAddComponent,
    AddComponent,
    NaviUserInfoComponent,
    TinjobComponent,
    CandidateComponent,
    JobAdvertisementAddComponent,
    JobAdvertisementComponent,
    
   
    
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule, 
  
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot({ positionClass: "toast-center-center" ,timeOut: 3500}),
     
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
