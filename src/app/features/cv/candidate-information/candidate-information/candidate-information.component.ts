import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate/candidate';
import { CandidateService } from 'src/app/service/candidate.service';
import { CvService } from 'src/app/service/cv.service';

@Component({
  selector: 'app-candidate-information',
  templateUrl: './candidate-information.component.html',
  styleUrls: ['./candidate-information.component.css']
})
export class CandidateInformationComponent implements OnInit {
  
  user: any
  candidate:Candidate

  constructor(private candidateService:CandidateService) { }

  ngOnInit(): void {
    this.getCandidateById()
    
  }

  getCandidateById() {
    this.candidateService
      .getCandidateById(this.getUserId())
      .subscribe((response: any) => {
        this.candidate = response.data;
      });
  }

  getUserId(): number {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user.data.id;
  }

}
