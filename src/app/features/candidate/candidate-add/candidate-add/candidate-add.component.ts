import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { CandidateService } from 'src/app/service/candidate.service';

@Component({
  selector: 'app-candidate-add',
  templateUrl: './candidate-add.component.html',
  styleUrls: ['./candidate-add.component.css']
})
export class CandidateAddComponent implements OnInit {
  candidateAddForm: FormGroup
  candidates: Candidate[] = []
  checkNatId: boolean = false
  checkEmail: boolean = false
  checkPassword: boolean = false
  password: string
  confirmPassword: string
  constructor(private candidateService: CandidateService, private formBuilder: FormBuilder,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createAddForm();
    this.getCandidate();
  }





  getCandidate() {
    this.candidateService.getCandidate().subscribe(data => this.candidates = data)

  }
  createAddForm() {
    this.candidateAddForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],

      birthYear: [0, Validators.required],
      nationalityId: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required]

    })
  }

  add() {
    this.checkDuplicateEmail();
    this.checkDublicateTc();

    this.checkDublicatePassword();
    if (this.candidateAddForm.valid) {
      if (!this.checkNatId && !this.checkEmail && !this.checkPassword) {


        this.candidateService.addCandidate(this.candidateAddForm.value).subscribe((response: any) => {
          this.toastrService.success(response.message, "Başarılı")
        })



      }
    } else { this.toastrService.error("Girdiğiniz bilgiler eksik") }

  }

  checkDuplicateEmail() {
    this.candidateService.checkCandidateUserEmail(this.candidateAddForm.value["email"]).subscribe((data: any) => {
      if (data.success == true) {
        this.checkEmail = true;
        this.toastrService.error("Bu mailden bulunmaktadır.")
      }
      else {
        this.checkEmail = false

      }
    })
  }

  checkDublicateTc() {
    this.candidateService.checkCandidateNationalityId(this.candidateAddForm.value["nationalityId"]).subscribe((data: any) => {
      if (data.success == true) {
        this.checkNatId = true;
        this.toastrService.error("Bu TC kimlik numarası ile kayıt olamazsınız")
      }
      else {
        this.checkNatId = false

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

}
