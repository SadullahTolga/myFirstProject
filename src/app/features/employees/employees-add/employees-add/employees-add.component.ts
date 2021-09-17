import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employer } from 'src/app/models/employees/employees';
import { EmplooyesService } from 'src/app/service/emplooyes.service';

@Component({
  selector: 'app-employees-add',
  templateUrl: './employees-add.component.html',
  styleUrls: ['./employees-add.component.css']
})
export class EmployeesAddComponent implements OnInit {
  employees: Employer[] = []
  employeesAddForm: FormGroup
  checkEmail: boolean = false
  password:string
  confirmPassword:string
  checkPassword:boolean=false

  constructor(private employeesService: EmplooyesService, private toastrService: ToastrService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createAddForm();

  }

  createAddForm() {
    this.employeesAddForm = this.formBuilder.group({
      companyName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      website: ["", Validators.required]
    })

  }
  getEmployees() {

    this.employeesService.getEmplooyes().subscribe(data => this.employees = data)

  }

  checkDuplicateEmail() {
    this.employeesService.checkEmployeeUserEmail(this.employeesAddForm.value["email"]).subscribe((data: any) => {
      if (data.success == true) {
        this.checkEmail = true;
        this.toastrService.error("Bu mailden bulunmaktadır.")
      }
      else {
        this.checkEmail = false

      }
    })
   
  }
  checkDublicatePassword() {
    if (this.password === this.confirmPassword) {
      this.checkPassword = true
      
    }
    else {
      this.checkPassword = false
      this.toastrService.error("Bu parolalar uyuşmuyor")
    }

  }

  checkEmailWebsite(){
    
  }

}
