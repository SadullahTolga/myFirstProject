import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Language } from 'src/app/models/language/language';
import { CandidateLanguagesService } from 'src/app/service/candidate-languages.service';
import { CandidateSchoolService } from 'src/app/service/candidate-school.service';
import { CandidateService } from 'src/app/service/candidate.service';
import { LanguagesService } from 'src/app/service/languages.service';

@Component({
  selector: 'app-candidate-languages',
  templateUrl: './candidate-languages.component.html',
  styleUrls: ['./candidate-languages.component.css']
})
export class CandidateLanguagesComponent implements OnInit {
  languages:Language[]=[]
  candidateLanguage:Language[]=[]
  cvForm: FormGroup
  user:any
 
  constructor(
    private candidateSchoolService:CandidateSchoolService,
   private candidateLanguageService:CandidateLanguagesService,
   private candidateService:CandidateService,
    private formBuilder: FormBuilder,
    private toastrService:ToastrService,
    private languagesService:LanguagesService
  ) { }

  ngOnInit(): void {
    this.createCvForm();
    this.getLanguages();
    this.getCandidateLanguages();
  }
  createCvForm() {
    this.cvForm = this.formBuilder.group({
   
     candidateId:[this.getUserId()],
     languageId:[],
     languageLevel:["",Validators.required]
    


    })
}


getLanguages(){
  this.languagesService.getAll().subscribe((data:any)=>this.languages=data.data)
}

add(){
  if(this.cvForm.valid){
    this.candidateLanguageService.add(this.cvForm.value).subscribe((data:any)=>{this.toastrService.success("Succes")})
    setTimeout(() => {window.location.reload()
        
    }, 1400);
  }
  else{this.toastrService.error("Please enter your information.")}
}

removeLanguages(languageId:number){
  this.candidateLanguageService.removeLanguage(languageId).subscribe((data:any)=>{
    this.toastrService.error("Deleted language!")
    setTimeout(() => {window.location.reload()
      
    }, 1400);
  })
}

getCandidateLanguages(){
  this.candidateService.getCandidateById(this.getUserId()).subscribe((data:any)=>this.candidateLanguage=data.data.candidateLanguages)

}
getUserId():any{
  this.user=JSON.parse(localStorage.getItem("user"))
  return this.user.data.id
}

}