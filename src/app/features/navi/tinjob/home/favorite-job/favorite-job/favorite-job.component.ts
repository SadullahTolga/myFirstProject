import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { JobAdvertisement } from 'src/app/models/jobAdvertisements/jobAdvertisements';
import { CandidateService } from 'src/app/service/candidate.service';

@Component({
  selector: 'app-favorite-job',
  templateUrl: './favorite-job.component.html',
  styleUrls: ['./favorite-job.component.css']
})
export class FavoriteJobComponent implements OnInit {
  user:any
  candidate:Candidate
  favoriteJA:JobAdvertisement[]=[]
  constructor(private candidateService:CandidateService) { }

  ngOnInit(): void {
    this.getCandidateById()
    this.getFavoriteJA()
  }


  getFavoriteJA(){
    this.candidateService.getCandidateById(this.getUserById()).subscribe((response:any)=>{
      this.favoriteJA=response.data.favoriteJobAdvertisements
    console.log(this.favoriteJA)})
  }



  getCandidateById(){
    this.candidateService.getCandidateById(this.getUserById()).subscribe((response:any)=>{this.candidate=response.data})
    
  }

  getUserById(): any {
    this.user = JSON.parse(localStorage.getItem("user"))
    return this.user.data.id
  }
}