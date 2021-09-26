import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './features/add/add/add.component';
import { CandidateAddComponent } from './features/candidate/candidate-add/candidate-add/candidate-add.component';
import { CandidateComponent } from './features/candidate/candidate/candidate.component';
import { CandidateAccountComponent } from './features/cv/candidate-account/candidate-account.component';
import { CandidateCvSchoolComponent } from './features/cv/candidate-cv-school/candidate-cv-school.component';
import { CandidateGithubComponent } from './features/cv/candidate-Github/candidate-github/candidate-github.component';
import { CandidateImageComponent } from './features/cv/candidate-image/candidate-image/candidate-image.component';
import { CandidateJobExperiencesComponent } from './features/cv/candidate-job-experiences/candidate-job-experiences.component';
import { CandidateLanguagesComponent } from './features/cv/candidate-languages/candidate-languages.component';
import { CandidateSkillComponent } from './features/cv/candidate-skill/candidate-skill.component';
import { CvAddComponent } from './features/cv/cvAdd/cv-add/cv-add.component';
import { CvViewComponent } from './features/cv/cvAdd/cv-view/cv-view/cv-view.component';
import { DepartmentAddComponent } from './features/departmentAdd/department/department.component';
import { EmployeeListComponent } from './features/employees/employee-list/employee-list.component';
import { EmployeesAddComponent } from './features/employees/employees-add/employees-add/employees-add.component';
import { EmployeesComponent } from './features/employees/employees/employees/employees.component';
import { CandidateJobAdverstisementComponent } from './features/job/candidateJobAdvertisement/candidate-job-adverstisement/candidate-job-adverstisement.component';
import { JobAdvertisementComponent } from './features/job/jobAdvertisement/job-advertisement/job-advertisement.component';
import { JobAdvertisementAddComponent } from './features/job/jobAdvertisementAdd/job-advertisement-add/job-advertisement-add.component';
import { UserLoginComponent } from './features/login/userLogin/user-login-employer/user-login.component';
import { HomeComponent } from './features/navi/tinjob/home/home/home.component';
import { TinjobComponent } from './features/navi/tinjob/tinjob/tinjob/tinjob.component';
import { SchoolComponent } from './features/school/school/school.component';




const routes: Routes = [
 
 
  {path:"candidate-add",component:CandidateAddComponent},
  {path:"employee-add",component:EmployeesAddComponent},
  {path:"user-login",component:UserLoginComponent},
  {path:"department",component:DepartmentAddComponent},
  {path:"employer",component:EmployeesComponent},
  {path:"candidate",component:CandidateComponent},
  {path:"job-advertisement",component:JobAdvertisementAddComponent},
  {path:"activatedJobAdvertisement",component:CandidateJobAdverstisementComponent},
  {path:"candidate-skill",component:CandidateSkillComponent},
  {path:"candidate-languages",component:CandidateLanguagesComponent},
  {path:"candidate-jobExperiences",component:CandidateJobExperiencesComponent},
  {path:"candidate-school",component:CandidateCvSchoolComponent},
  {path:"candidate-LınkedIn",component:CandidateAccountComponent},
  {path:"candidate-gitHub",component:CandidateGithubComponent},
  {path:"image-upload",component:CandidateImageComponent},
  {path:"cv",component:CvAddComponent},
  {path:"cv-view",component:CvViewComponent},

  {path:"activeJobAdvertisement",component:EmployeeListComponent},
  {path:"department-add",component:AddComponent},
  {path:"home",component:HomeComponent},
  {path:"school",component:SchoolComponent},
  {path:"tinjob",component:TinjobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
