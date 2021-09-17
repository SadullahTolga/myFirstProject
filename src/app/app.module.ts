import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateAddComponent } from './features/candidate/candidate-add/candidate-add/candidate-add.component';
import { HeadingNaviComponent } from './features/navi/heading-navi/heading-navi/heading-navi.component';
import { EmployeesComponent } from './features/employees/employees/employees/employees.component';
import { EmployeesAddComponent } from './features/employees/employees-add/employees-add/employees-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateAddComponent,
    HeadingNaviComponent,
    EmployeesComponent,
    EmployeesAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({ positionClass: "toast-center-center" ,timeOut: 3500}),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
