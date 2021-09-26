import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { CandidateService } from 'src/app/service/candidate.service';
import { CvService } from 'src/app/service/cv.service';



@Component({
  selector: 'app-cv-add',
  templateUrl: './cv-add.component.html',

  styleUrls: ['./cv-add.component.css'],

})
export class CvAddComponent implements OnInit {
  user: any
  candidate: Candidate
  cvForm: FormGroup
  candidateJobExperienceIds: any[] = []
  candidateLanguagesIds: any[] = []
  candidateSchoolIds: any[] = []
  candidateSkillIds: any[] = []

  constructor(private cvService: CvService, private formBuilder: FormBuilder, private toastrService: ToastrService, private candidateService: CandidateService) { }

  ngOnInit() {
    this.createCvForm();
    this.getCandidateSchoolIds();
    this.getCandidateSkillIds();
    this.getCandidateLanguagesIds();
    this.getCandidateJobExperienceIds();

  }

  createCvForm() {
    this.cvForm = this.formBuilder.group({
      candidateId: [this.getUserId()],
      candidateJobExperiencesIds: [this.getCandidateJobExperienceIds()],
      candidateLanguageIds: [this.getCandidateLanguagesIds()],
      candidateSchoolIds: [this.getCandidateSchoolIds()],
      candidateSkillIds: [this.getCandidateSkillIds()],
      coverLetter: ["", Validators.required],
      title: ["", Validators.required],
    })
  }

  add() {
    this.cvService.cvAdd(this.cvForm.value).subscribe((data: any) => {
      (this.toastrService.success("Succes"))
      this.cvForm.reset()
    })
  }


  getCandidateJobExperienceIds(): any[] {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((data: any) => {
      for (let i = 0; i < data.data.candidateJobExperiences.length; i++) {
        this.candidateJobExperienceIds[i] = data.data.candidateJobExperiences[i].id
      }

    })
    return this.candidateJobExperienceIds;

  }

  getCandidateLanguagesIds(): any[] {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((data: any) => {
      for (let i = 0; i < data.data.candidateLanguages.length; i++) {
        this.candidateLanguagesIds[i] = data.data.candidateLanguages[i].id
      }

    })
    return this.candidateLanguagesIds;

  }

  getCandidateSchoolIds(): any[] {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((data: any) => {
      for (let i = 0; i < data.data.candidateSchools.length; i++) {
        this.candidateSchoolIds[i] = data.data.candidateSchools[i].id
      }

    })
    return this.candidateSchoolIds;
  }

  getCandidateSkillIds(): any[] {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((data: any) => {
      for (let i = 0; i < data.data.candidateSkills.length; i++) {
        this.candidateSkillIds[i] = data.data.candidateSkills[i].id
      }

    })
    return this.candidateSkillIds;
  }



  getUserId(): any {
    this.user = JSON.parse(localStorage.getItem("user"))
    return this.user.data.id
  }

}