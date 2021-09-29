import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';

import { Skill } from 'src/app/models/skill/skill';
import { CandidateSkillService } from 'src/app/service/candidate-skill.service';
import { CandidateService } from 'src/app/service/candidate.service';

import { SkillsService } from 'src/app/service/skills.service';


@Component({
  selector: 'app-candidate-skill',
  templateUrl: './candidate-skill.component.html',
  styleUrls: ['./candidate-skill.component.css']
})
export class CandidateSkillComponent implements OnInit {
  skills: Skill[] = []
  user: any
  cvForm: FormGroup
  candidate: Candidate[] = []
  candidateSkills: Skill[] = []





  constructor(
    private skillService: SkillsService,
    private candidateSkillService: CandidateSkillService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private candidateService: CandidateService
  ) { }

  ngOnInit(): void {
    this.getSkills();
    this.createCvForm();
    this.getCandidateSkill();




  }
  createCvForm() {
    this.cvForm = this.formBuilder.group({
      candidateId: [this.getByUserId()],
      skillId: ["", Validators.required],


    })
  }
  add() {
    if (this.cvForm.valid) {
      this.candidateSkillService.addSkill(this.cvForm.value).subscribe((data: any) => {
        this.toastrService.success(data.message, "Succes")
        setTimeout(() => {window.location.reload()
        
        }, 1400);
        console.log("Eklendi")

      })
    } else {
      this.toastrService.error("Please chose your skill")
    }
  }

  removeSkill(skillId: number) {
    this.candidateSkillService.removeSkill(skillId).subscribe((data: any) => {
      this.toastrService.error("Deleted skill!")
      setTimeout(() => {window.location.reload()
        
      }, 1400);
    }
    )

  }
  getSkills() {
    this.skillService.getSkills().subscribe((data: any) => {
      this.skills = data.data
    })
  }

  getCandidateSkill() {
    this.candidateService.getCandidateById(this.getByUserId()).subscribe((data: any) => this.candidateSkills = data.data.candidateSkills)
  }



  getByUserId(): any {
    this.user = JSON.parse(localStorage.getItem('user'))
    return this.user.data.id
  }
}
