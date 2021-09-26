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
import { JobAdvertisementAddComponent } from './features/job/jobAdvertisementAdd/job-advertisement-add/job-advertisement-add.component';
import { JobAdvertisementComponent } from './features/job/jobAdvertisement/job-advertisement/job-advertisement.component';
import { TableModule } from 'primeng/table';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ButtonModule } from 'primeng/button';
import { CvAddComponent } from './features/cv/cvAdd/cv-add/cv-add.component';
import { CandidateJobAdverstisementComponent } from './features/job/candidateJobAdvertisement/candidate-job-adverstisement/candidate-job-adverstisement.component';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {DropdownModule} from 'primeng/dropdown';
import {StepsModule} from 'primeng/steps';
import { CandidateSkillComponent } from './features/cv/candidate-skill/candidate-skill.component';
import { CandidateLanguagesComponent } from './features/cv/candidate-languages/candidate-languages.component';
import { CandidateJobExperiencesComponent } from './features/cv/candidate-job-experiences/candidate-job-experiences.component';
import { CandidateCvSchoolComponent } from './features/cv/candidate-cv-school/candidate-cv-school.component';
import { CandidateAccountComponent } from './features/cv/candidate-account/candidate-account.component';
import {CardModule} from 'primeng/card';
import { CandidateGithubComponent } from './features/cv/candidate-Github/candidate-github/candidate-github.component';
import { EmployeeListComponent } from './features/employees/employee-list/employee-list.component';
import { TinjobComponent } from './features/navi/tinjob/tinjob/tinjob/tinjob.component';
import { HomeComponent } from './features/navi/tinjob/home/home/home.component';
import { CandidateImageComponent } from './features/cv/candidate-image/candidate-image/candidate-image.component';
import {RouterModule} from '@angular/router';

import { CvViewComponent } from './features/cv/cvAdd/cv-view/cv-view/cv-view.component';
import { SchoolComponent } from './features/school/school/school.component';


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
    
    CandidateComponent,
    JobAdvertisementAddComponent,
    JobAdvertisementComponent,
    CvAddComponent,
    CandidateJobAdverstisementComponent,
    CandidateSkillComponent,
    CandidateLanguagesComponent,
    CandidateJobExperiencesComponent,
    CandidateCvSchoolComponent,
    CandidateAccountComponent,
    CandidateGithubComponent,
    EmployeeListComponent,
    TinjobComponent,
    HomeComponent,
    CandidateImageComponent,
    CvViewComponent,
    SchoolComponent
    
   
    
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule, 
    SlideMenuModule,
    ButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot({ positionClass: "toast-bottom-right" ,timeOut: 3500}),
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    DropdownModule,
    StepsModule,
    CardModule,
   
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
