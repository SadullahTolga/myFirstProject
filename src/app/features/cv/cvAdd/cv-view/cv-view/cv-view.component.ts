import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  skill: Skill[] = []
  candidateLanguage: Language[]=[]
  departments: Department
  candidateSchool: School[] = []
  
  candidateJobExperiencesList: CandidateJobExperience[] = []
  candidate: Candidate
  cvForm: FormGroup
  toUpdatedCv: any;
  updatedCvId: number;
  user: any

  constructor(private candidateService: CandidateService,private cvService:CvService,private formBuilder:FormBuilder,private toastrService:ToastrService
   
  ) { }

  ngOnInit(): void {
    this.createCvForm();
    this.getCandidateById()
    this.departmentGetAll()
    this.getCandidateSchool()
    this.getCandidateJobExp()
    this.getCandidateLanguages()
    this.getCandidateSkill()
    this.getSkill();
  }

  createCvForm() {
    this.cvForm = this.formBuilder.group({
      cvId: [this.updatedCvId],
      coverLetter: ["", Validators.required]

    })
  }

  addCoverLetter() { 
    if(this.cvForm.valid){
      this.cvService
      .coverLetterUpdate(
        this.toUpdatedCv,
        this.cvForm.value['coverLetter']
      )
      .subscribe((response: any) => {
        this.toastrService.success('Cover letter added successfully');
        
      });
    } else{this.toastrService.error("Please enter your cover letter")}
   
  }

  getCvById() {
    if (this.candidate.cvs.length > 0) {
      this.cvService
        .getCvById(this.candidate.cvs[0].id)
        .subscribe((response: any) => {
          this.toUpdatedCv = response.data;
          this.updatedCvId = response.data.candidate.cvs[0].id;
        });
    }
  }









  getCandidateById() {
    this.candidateService
      .getCandidateById(this.getByUserId())
      .subscribe((response: any) => {
        this.candidate = response.data;
        this.getCvById();
      });
  }




  getByUserId(): any {
    this.user = JSON.parse(localStorage.getItem("user"))
    return this.user.data.id
  }

 

  departmentGetAll() {
    this.candidateService.getCandidateById(this.getByUserId()).subscribe((response: any) => { this.departments = response.data.department })
  }

  getCandidateSchool() {
    this.candidateService.getCandidateById(this.getByUserId()).subscribe((response: any) => { this.candidateSchool = response.data.candidateSchools })
  }
  getCandidateJobExp() {
    this.candidateService.getCandidateById(this.getByUserId()).subscribe((data: any) => { this.candidateJobExperiencesList = data.data.candidateJobExperiences })

  }
  getCandidateLanguages() {
    this.candidateService.getCandidateById(this.getByUserId()).subscribe((data: any) => { this.candidateLanguage = data.data.candidateLanguages })

  }
  getCandidateSkill() {
    this.candidateService.getCandidateById(this.getByUserId()).subscribe((data: any) => { this.candidateSkills = data.data.candidateSkills })
  }
  getSkill() {
    this.candidateService.getCandidateById(this.getByUserId()).subscribe((data: any) => { this.skill = data.data.candidateSkills })
  }




}
