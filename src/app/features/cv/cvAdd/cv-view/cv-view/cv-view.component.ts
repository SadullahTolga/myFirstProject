import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate/candidate';
import { Cv } from 'src/app/models/cv/cv';
import { CandidateSchoolService } from 'src/app/service/candidate-school.service';
import { CandidateService } from 'src/app/service/candidate.service';
import { JobExperiencesService } from 'src/app/service/job-experiences.service';

@Component({
  selector: 'app-cv-view',
  templateUrl: './cv-view.component.html',
  styleUrls: ['./cv-view.component.css']
})
export class CvViewComponent implements OnInit {
  
  user: Candidate
  userNew:any
  candidateLanguages: any;
  candidateJobExperiences: any;
  candidateSchools: any;
  candidateSkills: any;
  constructor(private candidateService: CandidateService,private candidateJobExperiencesService:JobExperiencesService,private candidateSchoolService:CandidateSchoolService) { }

  ngOnInit(): void {
    this.getCandidateById();
   
  }


  getCandidateById() {
    this.candidateService.getCandidateById(this.getByUserId()).subscribe((data: any) => { 
      this.user = data.data
      this.candidateLanguages = data.data.candidateLanguages;
      this.candidateSkills = data.data.candidateSkills;
      })
  }

  getByUserId(): any {
    this.user = JSON.parse(localStorage.getItem("user"))
    return this.userNew.data.id
  }


}
