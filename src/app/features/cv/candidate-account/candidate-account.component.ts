import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { CandidateService } from 'src/app/service/candidate.service';

@Component({
  selector: 'app-candidate-account',
  templateUrl: './candidate-account.component.html',
  styleUrls: ['./candidate-account.component.css']
})
export class CandidateAccountComponent implements OnInit {
user:any
  cvForm: FormGroup
 candidates:Candidate[]=[]
 candidateAccount:Candidate[]=[]
  constructor(
   
    private candidateService:CandidateService,
    private toastrService: ToastrService,

    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createCvForm();

  }
  createCvForm() {
    this.cvForm = this.formBuilder.group({
      candidateId:[this.returnUserId()],
      
      candidateLınkedIn: ["",Validators.required],
      


    })
}



 updateLinkedIn(){
  if (this.cvForm.valid) {
   
    this.candidateService.updateLinkedIn(this.returnUserId(),this.cvForm.value["candidateLınkedIn"]).subscribe((response:any) => {
      this.toastrService.success('Account uptade');
      this.cvForm.reset()
    });
  } else {
    this.toastrService.error('İnformation is missing', 'Warning');
  }
} 

getCandidateById(){
  this.candidateService.getCandidateById(this.returnUserId()).subscribe((response:any)=>{this.candidateAccount=response.data})

}

returnUserId():any{
  this.user=JSON.parse(localStorage.getItem("user")
  )
  return this.user.data.id
}
}
