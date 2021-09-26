
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CandidateJobExperience } from 'src/app/models/candidate-job-experience/candidate-job-experience';
import { Position } from 'src/app/models/position/position';
import { CandidateService } from 'src/app/service/candidate.service';
import { JobExperiencesService } from 'src/app/service/job-experiences.service';
import { PositionService } from 'src/app/service/positionService';


@Component({
  selector: 'app-candidate-job-experiences',
  templateUrl: './candidate-job-experiences.component.html',
  styleUrls: ['./candidate-job-experiences.component.css']
})
export class CandidateJobExperiencesComponent implements OnInit {
  jobExperienceForm:FormGroup
  constructor(private formBuilder:FormBuilder,
    private candidateJobExperiencesService:JobExperiencesService,
    private positionService:PositionService,private toastrService:ToastrService,
   private candidateService:CandidateService) { }
  positions:Position[]= []
  jobExperiences:CandidateJobExperience[]=[]
  candidateJobExperiencesList:CandidateJobExperience[]=[]
  user:any
  date:boolean=false
  ngOnInit(): void {

    this.createJobExperienceForm();
    this.getPositions();
    this.getCandidateJobExp()
  }
  createJobExperienceForm(){
    this.jobExperienceForm=this.formBuilder.group({
      candidateId:[this.getUserId()],
      positionId:["",Validators.required],
      startYear:["",Validators.required],
      quitYear:[""],
      workPlace:["",Validators.required],
     
    })
  }

add(){
  if(this.jobExperienceForm.valid){
    this.candidateJobExperiencesService.add(this.jobExperienceForm.value).subscribe((response:any)=>{this.toastrService.success("Succes")
    window.location.reload();})
  } else{this.toastrService.error("Please enter your all information!")}
}

getCandidateJobExp(){
  this.candidateService.getCandidateById(this.getUserId()).subscribe((data:any)=>this.candidateJobExperiencesList=data.data.candidateJobExperiences)

}

  getPositions() {
    this.positionService.getPosition().subscribe((response:any )=> { this.positions = response.data
       })
  }
  getUserId():any{

    this.user=JSON.parse(localStorage.getItem("user"))
    return this.user.data.id
  }

  checkOuitDate(){
    if(this.jobExperienceForm.value["quitYear"]==="null"){
      return this.date= true
    } else{
      return this.date= false
    }

  }

  
}
