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
  checkDomain:boolean=false
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
      confirmPassword:["",Validators.required],
      phoneNumber: ["", Validators.required],
      website: ["", Validators.required]
    })

  }
  getEmployees() {

    this.employeesService.getEmplooyes().subscribe(data => this.employees = data)

  }

  addEmployer() {
   
    if (this.employeesAddForm.valid) {
      if (!this.checkPassword) {
        let employerModel = Object.assign({}, this.employeesAddForm.value);
        this.employeesService.addEmplooyes(employerModel).subscribe((response: any) => {
          console.log(employerModel)
          this.toastrService.success("Kaydınız yapıldı.", employerModel.companyName)
        },
        (responseError) => {
          let message = JSON.stringify(responseError.error.data.errors);
          this.toastrService.error(
            message.replace(/{|}|"/gi, ''), 'Doğrulama Hatası');
        })
      }
    } else{
      this.toastrService.error("Bilgiler eksik")
    }
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
      this.toastrService.error("Bu parolalar uyuşmuyor")
    }
    else {
      this.checkPassword = false
     
    }

  }


}
