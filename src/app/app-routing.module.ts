import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './features/add/add/add.component';
import { CandidateAddComponent } from './features/candidate/candidate-add/candidate-add/candidate-add.component';
import { CandidateComponent } from './features/candidate/candidate/candidate.component';
import { DepartmentAddComponent } from './features/departmentAdd/department/department.component';
import { EmployeesAddComponent } from './features/employees/employees-add/employees-add/employees-add.component';
import { EmployeesComponent } from './features/employees/employees/employees/employees.component';
import { JobAdvertisementComponent } from './features/job/jobAdvertisement/job-advertisement/job-advertisement.component';
import { JobAdvertisementAddComponent } from './features/job/jobAdvertisementAdd/job-advertisement-add/job-advertisement-add.component';
import { UserLoginComponent } from './features/login/userLogin/user-login-employer/user-login.component';
import { TinjobComponent } from './features/navi/tinjob/tinjob/tinjob.component';



const routes: Routes = [
 
 
  {path:"candidate-add",component:CandidateAddComponent},
  {path:"employee-add",component:EmployeesAddComponent},
  {path:"user-login",component:UserLoginComponent},
  {path:"department",component:DepartmentAddComponent},
  {path:"employer",component:EmployeesComponent},
  {path:"candidate",component:CandidateComponent},
  {path:"job-advertisement",component:JobAdvertisementAddComponent},
  {path:"activeJobAdvertisement",component:JobAdvertisementComponent},
  {path:"department-add",component:AddComponent},
  {path:"tinjob",component:TinjobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
