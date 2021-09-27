import { Component, OnInit } from '@angular/core';
import { CandidateJobExperience } from 'src/app/models/candidate-job-experience/candidate-job-experience';
import { Candidate } from 'src/app/models/candidate/candidate';
import { Cv } from 'src/app/models/cv/cv';
import { Department } from 'src/app/models/department/departmen';
import { Language } from 'src/app/models/language/language';
import { School } from 'src/app/models/school/school';
import { Skill } from 'src/app/models/skill/skill';
import { CandidateSchoolService } from 'src/app/service/candidate-school.service';
import { CandidateService } from 'src/app/service/candidate.service';
import { CvService } from 'src/app/service/cv.service';
import { DepartmentService } from 'src/app/service/department.service';


@Component({
  selector: 'app-cv-view',
  templateUrl: './cv-view.component.html',
  styleUrls: ['./cv-view.component.css']
})
export class CvViewComponent implements OnInit {
  candidateSkills: Skill
  candidateLanguage:Language
  departments: Department
  candidateSchool:School[]=[]
  candidateJobExperiencesList:CandidateJobExperience[]=[]
  candidate:Candidate
  cv:Cv

  user:any
  
  constructor(private candidateService: CandidateService,
    private candidateSchoolService: CandidateSchoolService,
    private departmentService: DepartmentService,
    private cvService:CvService
  ) { }

  ngOnInit(): void {
    this.getCandidate()
    this.departmentGetAll() 
    this.getCandidateSchool()
    this.getCandidateJobExp()
    this.getCandidateLanguages()
    this.getCandidateSkill()
    this.getByUserId()
  }
  getCandidate(){
    this.candidateService.getCandidateById(this.getByUserId()).subscribe((response:any )=> { this.candidate = response.data
    
      })
  
  }
  getCv(){
    this.candidateService.getCandidateById(this.getByUserId()).subscribe((response:any)=>
    {this.cv=response.data.cvs.title})
  }
  departmentGetAll() {
    this.candidateService.getCandidateById(this.getByUserId()).subscribe((response:any)=>
    {this.departments=response.data.department})  }

  getCandidateSchool(){
    this.candidateService.getCandidateById(this.getByUserId()).subscribe((response:any)=>
    {this.candidateSchool=response.data.candidateSchools})
  }
  getCandidateJobExp(){
    this.candidateService.getCandidateById(this.getByUserId()).subscribe((data:any)=>this.candidateJobExperiencesList=data.data.candidateJobExperiences)
  
  }
  getCandidateLanguages(){
    this.candidateService.getCandidateById(this.getByUserId()).subscribe((data:any)=>this.candidateLanguage=data.data.candidateLanguages)
  
  }

  getCandidateSkill() {
    this.candidateService.getCandidateById(this.getByUserId()).subscribe((data: any) => this.candidateSkills = data.data.candidateSkills)
  }

  getByUserId(): any {
    this.user = JSON.parse(localStorage.getItem("user"))
    return this.user.data.id
  }


}
