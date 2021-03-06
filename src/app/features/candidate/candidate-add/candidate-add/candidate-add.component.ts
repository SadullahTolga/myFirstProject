import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { CandidateService } from 'src/app/service/candidate.service';

@Component({
  selector: 'app-candidate-add',
  templateUrl: './candidate-add.component.html',
  styleUrls: ['./candidate-add.component.css']
})
export class CandidateAddComponent implements OnInit {
  candidateSignForm: FormGroup;
  checkNatId: boolean = false;

  constructor(
    private candidateService: CandidateService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createSignForm();
  }

  createSignForm() {
    this.candidateSignForm = this.formBuilder.group({
      birthYear: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], //email tipinde
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nationalityId: ['', Validators.required],
      password: [
        '',Validators.required
      ],
      confirmPassword: ['', Validators.required],
    });
  }

  addCandidate() {
    if (this.candidateSignForm.valid) {
      if (this.checkPassword()) {
        this.candidateService
        .addCandidate(this.candidateSignForm.value)
        .subscribe(
          (response: any) => {
            this.toastrService.success(response.message, 'Başarılı');
            this.router.navigate["tinjob"]
          },
          (responseError) => {
            let message = JSON.stringify(responseError.error.data.errors);
            console.log(message);
            this.toastrService.error(
              message.replace(/{|}|"/gi, ''),
              'Validation error'
            );
          }
        );
      }
    } else {
      this.toastrService.error('Invalid form');
    }
  }

  checkPassword(): boolean {
    let password = this.candidateSignForm.value['password'];
    let confirmPassword = this.candidateSignForm.value['confirmPassword'];

    if (password === confirmPassword) {
      return true;
    } else {
      this.toastrService.error(
        'Your password and confirm password does not match!'
      );
      return false;
    }
  }
}