import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employer } from 'src/app/models/employees/employees';
import { EmplooyesService } from 'src/app/service/emplooyes.service';

@Component({
  selector: 'app-employer-update',
  templateUrl: './employer-update.component.html',
  styleUrls: ['./employer-update.component.css']
})
export class EmployerUpdateComponent implements OnInit {
  user: any
  employer: Employer
  companyNameUpdateForm: FormGroup
  updatePhoneNumberForm: FormGroup
  updateEmailAndWebsiteForm: FormGroup
  constructor(private employerService: EmplooyesService, private formBuilder: FormBuilder, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createCompanyNameUpdateForm()
    this.createPhoneNumberUpdateForm()
    this.createEmailAndWebsiteUpdateForm()
    this.getEmployerById()
  }

  createCompanyNameUpdateForm() {
    this.companyNameUpdateForm = this.formBuilder.group({
      emplId: [this.getUserId()],
      companyName: ["", Validators.required]
    })
  }

  createPhoneNumberUpdateForm() {
    this.updatePhoneNumberForm = this.formBuilder.group({
      emplId: [this.getUserId()],
      phoneNumber: ["", Validators.required]
    })
  }

  createEmailAndWebsiteUpdateForm() {
    this.updateEmailAndWebsiteForm = this.formBuilder.group({
      emplId: [this.getUserId()],
      email: ["", Validators.required],
      website: ["", Validators.required]
    })
  }

  updateCompanyName() {

    this.employerService.updateCompanyName(
      this.employer, this.companyNameUpdateForm.value["companyName"]).subscribe((response: any) => {
        this.toastrService.success("Request sent")
        setTimeout(() => {
          window.location.reload()}, 1400);
      })
  }

  updatePhoneNumber() {
    this.employerService.updatePhoneNumber(
      this.employer, this.updatePhoneNumberForm.value["phoneNumber"]).subscribe((response: any) => {
        this.toastrService.success("Request sent")
        setTimeout(() => {
          window.location.reload()

        }, 1400);
      }
        ,
        (responseError) => {
          let message = JSON.stringify(responseError.error.data.errors);
          console.log(responseError);
          this.toastrService.error(
            message.replace(/{|}|"/gi, ''),
            'Verification error'
          );
        }
      )

  }
  updateEmailAndWebsite() {
    this.employerService.updateEmailAndWebsite(this.employer,
      this.updateEmailAndWebsiteForm.value["website"],
      this.updateEmailAndWebsiteForm.value["email"]).subscribe((response: any) => {
        this.toastrService.success("Request sent")
        setTimeout(() => {
          window.location.reload()

        }, 1400);
      },
        (responseError) => {
          let message = JSON.stringify(responseError.error.data.errors);
          this.toastrService.error(
            message.replace(/{|}|"/gi, ''),
            'Verification error'
          );
        });

  }

  getEmployerById() {
    this.employerService.getEmplooyesId(this.getUserId()).subscribe((response: any) => {
      this.employer = response.data
      console.log(this.employer.companyName)
    })
  }

  getUserId(): any {
    this.user = JSON.parse(localStorage.getItem("user"))
    return this.user.data.id
  }
}
