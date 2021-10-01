import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateInformationComponent } from 'src/app/features/cv/candidate-information/candidate-information/candidate-information.component';
import { Candidate } from 'src/app/models/candidate/candidate';
import { Employer } from 'src/app/models/employees/employees';
import { JobAdvertisement } from 'src/app/models/jobAdvertisements/jobAdvertisements';

import { User } from 'src/app/models/user/user';
import { CandidateService } from 'src/app/service/candidate.service';
import { EmplooyesService } from 'src/app/service/emplooyes.service';
import { JobAdvertisementService } from 'src/app/service/job-advertisement.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  unverifiedJA:JobAdvertisement[]=[]
  user:any;
  loggedUser:any
  unverifiedEmployers: Employer[] = [];
 

  constructor(private route:Router,
    private toastrService:ToastrService,private jobAdvertisementService:JobAdvertisementService,
    private employerService:EmplooyesService,
    private candidateService:CandidateService
   ) { }

  ngOnInit(): void {
    this.getUserInfo()
    
    this.getUnverifiedJA()
    this.getUnverifiedEmployers()
    

  }
  getUserInfo():any{
    this.user = JSON.parse(localStorage.getItem("user"))
    this.loggedUser=this.user.data
    return this.user;
  }

  checkUser():boolean{
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  }

  checkEmployer(): boolean {
    if (this.checkUser()) {
      let user = JSON.parse(localStorage.getItem('user'));
      let role = user.message;
      if (role.includes('employer')) {
         
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  checkCandidate(): boolean {
    if (this.checkUser()) {
      let user = JSON.parse(localStorage.getItem('user'));
      let role = user.message;
      if (role.includes('candidate')) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  checkSystemEmployer(): boolean {
   if (this.checkUser()) {
     let user = JSON.parse(localStorage.getItem('user'));
     let role = user.message;
     if (role.includes('systemEmployee')) {
        
       return true;
     } else {
       return false;
     }
   } else {
     return false;
   }
 }

 getUnverifiedJA(){
  this.jobAdvertisementService.getUnverifiedJA(1).subscribe((response:any)=>this.unverifiedJA=response.data) 
}
getUnverifiedEmployers() {
  this.employerService.getEmplooyes().subscribe((response: any) => {
    response.data = response.data.filter((r) => r.updateVerified === false);
    this.unverifiedEmployers = response.data;
   
  });
}




  
}
