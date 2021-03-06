import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './features/add/add/add.component';
import { CandidateAddComponent } from './features/candidate/candidate-add/candidate-add/candidate-add.component';
import { CandidateComponent } from './features/candidate/candidate/candidate.component';
import { CandidateAccountComponent } from './features/cv/candidate-account/candidate-account.component';
import { CandidateCvSchoolComponent } from './features/cv/candidate-cv-school/candidate-cv-school.component';
import { CandidateGithubComponent } from './features/cv/candidate-Github/candidate-github/candidate-github.component';
import { CandidateImageComponent } from './features/cv/candidate-image/candidate-image/candidate-image.component';
import { CandidateInformationComponent } from './features/cv/candidate-information/candidate-information/candidate-information.component';
import { CandidateJobExperiencesComponent } from './features/cv/candidate-job-experiences/candidate-job-experiences.component';
import { CandidateLanguagesComponent } from './features/cv/candidate-languages/candidate-languages.component';
import { CandidateSkillComponent } from './features/cv/candidate-skill/candidate-skill.component';
import { CvAddComponent } from './features/cv/cvAdd/cv-add/cv-add.component';
import { CvViewComponent } from './features/cv/cvAdd/cv-view/cv-view/cv-view.component';
import { DepartmentAddComponent } from './features/departmentAdd/department/department.component';
import { EmployeeListComponent } from './features/employees/employee-list/employee-list.component';
import { EmployeesAddComponent } from './features/employees/employees-add/employees-add/employees-add.component';
import { EmployeesComponent } from './features/employees/employees/employees/employees.component';
import { EmployerUpdateComponent } from './features/employees/employerUpdate/employer-update/employer-update.component';
import { CandidateJobAdverstisementComponent } from './features/job/candidateJobAdvertisement/candidate-job-adverstisement/candidate-job-adverstisement.component';
import { FavoriteJAComponent } from './features/job/favoriteJA/favorite-ja/favorite-ja.component';
import { JobAdvertisementAddComponent } from './features/job/jobAdvertisementAdd/job-advertisement-add/job-advertisement-add.component';
import { PublicJaComponent } from './features/job/public-JA/public-ja/public-ja.component';
import { UnverifiedJAComponent } from './features/job/unverifiedJobAdvertisement/unverified-ja/unverified-ja.component';
import { UserLoginComponent } from './features/login/userLogin/user-login-employer/user-login.component';
import { FavoriteJobComponent } from './features/navi/tinjob/home/favorite-job/favorite-job/favorite-job.component';
import { HomeComponent } from './features/navi/tinjob/home/home/home.component';
import { TinjobComponent } from './features/navi/tinjob/tinjob/tinjob/tinjob.component';
import { SchoolComponent } from './features/school/school/school.component';
import { EmployerUpdateVerifiedComponent } from './features/systemEmployer/employerUpdateVerified/employer-update-verified/employer-update-verified.component';
import { SystemEmployerUpdateComponent } from './features/systemEmployer/systemEmployerUpdate/system-employer-update/system-employer-update.component';
import { CandidateAccountGuard } from './guards/candidate-guards/candidate-account.guard';
import { CandidateCvAddGuard } from './guards/candidate-guards/candidate-cv-add.guard';
import { CandidateCvViewGuard } from './guards/candidate-guards/candidate-cv-view.guard';
import { CandidateExperienceGuard } from './guards/candidate-guards/candidate-experience.guard';
import { CandidateLanguageGuard } from './guards/candidate-guards/candidate-language.guard';
import { CandidateSchoolGuard } from './guards/candidate-guards/candidate-school.guard';
import { CandidateSkillGuard } from './guards/candidate-guards/candidate-skill.guard';
import { CvInformationGuard } from './guards/candidate-guards/cv-information.guard';
import { EmployerListGuardGuard } from './guards/candidate-guards/employer-list-guard.guard';
import { EmployerUpdateGuard } from './guards/Employer/employer-update.guard';
import { PositionGuard } from './guards/Employer/position.guard';
import { SystemEmployerGuard } from './guards/systemEmployerGuard/system-employer.guard';




const routes: Routes = [


  { path: "candidate-add", component: CandidateAddComponent },
  { path: "employee-add", component: EmployeesAddComponent },
  { path: "user-login", component: UserLoginComponent },
  { path: "department", component: DepartmentAddComponent },
  { path: "employer", component: EmployeesComponent, canActivate: [CandidateSkillGuard] },
  {path: "public-JA",component:PublicJaComponent},
  {path:"favJa",component:FavoriteJobComponent,canActivate:[CandidateAccountGuard]},
  {path:"employerInformation",component:EmployerUpdateComponent,canActivate:[EmployerUpdateGuard]},
  { path: "candidate", component: CandidateComponent,canActivate:[PositionGuard] },
  { path: "job-advertisement", component: JobAdvertisementAddComponent ,canActivate:[PositionGuard] },
  { path: "activatedJobAdvertisement", component: CandidateJobAdverstisementComponent },
  { path: "candidate-skill", component: CandidateSkillComponent, canActivate: [CandidateSkillGuard] },
  { path: "candidate-languages", component: CandidateLanguagesComponent, canActivate: [CandidateLanguageGuard] },
  { path: "candidate-jobExperiences", component: CandidateJobExperiencesComponent, canActivate: [CandidateExperienceGuard] },
  { path: "candidate-school", component: CandidateCvSchoolComponent, canActivate: [CandidateSchoolGuard] },
  { path: "candidate-L??nkedIn", component: CandidateAccountComponent, canActivate: [CandidateAccountGuard] },
  { path: "candidate-gitHub", component: CandidateGithubComponent, canActivate: [CandidateAccountGuard] },
  { path: "image-upload", component: CandidateImageComponent, canActivate: [CandidateImageComponent] },
  { path: "cv", component: CvAddComponent, canActivate: [CandidateCvAddGuard] },
  { path: "cv-view", component: CvViewComponent, canActivate: [CandidateCvViewGuard] },
  {path:"cvInformation",component:CandidateInformationComponent,canActivate:[CvInformationGuard]},
  { path: "activeJobAdvertisement", component: EmployeeListComponent,canActivate:[PositionGuard]  },
  {path:"favoriteJA",component:FavoriteJAComponent,canActivate:[CandidateAccountGuard]},
  { path: "department-add", component: AddComponent,canActivate:[PositionGuard]  },
  {path:"unverifiedJA",component:UnverifiedJAComponent,canActivate:[SystemEmployerGuard]},
  {path:"employerUpdateVerified",component:EmployerUpdateVerifiedComponent,canActivate:[SystemEmployerGuard]},
  {path:"systemEmployerUpdate",component:SystemEmployerUpdateComponent,canActivate:[SystemEmployerGuard]},
  
  { path: "home", component: HomeComponent },
  { path: "school", component: SchoolComponent },
  { path: "tinjob", component: TinjobComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
