import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { JobAdvertisement } from 'src/app/models/jobAdvertisements/jobAdvertisements';
import { CandidateService } from 'src/app/service/candidate.service';

@Component({
  selector: 'app-favorite-ja',
  templateUrl: './favorite-ja.component.html',
  styleUrls: ['./favorite-ja.component.css']
})
export class FavoriteJAComponent implements OnInit {
  user:any
  candidate:Candidate
  favoriteJA:JobAdvertisement[]=[]
  constructor(private candidateService:CandidateService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCandidateById()
    this.getFavoriteJA()
  }


  getFavoriteJA(){
    this.candidateService.getCandidateById(this.getUserById()).subscribe((response:any)=>{
      this.favoriteJA=response.data.favoriteJobAdvertisements})
  }

  removeFromJA(id:number){
    this.candidateService.removeFavoriteJA(this.candidate,id).subscribe((response:any)=>{
      this.toastrService.error("Successfully removed from favorites")
      setTimeout(() => {
        window.location.reload()

      }, 1400);})
  }

  getCandidateById(){
    this.candidateService.getCandidateById(this.getUserById()).subscribe((response:any)=>{this.candidate=response.data})
    
  }

  getUserById(): any {
    this.user = JSON.parse(localStorage.getItem("user"))
    return this.user.data.id
  }
}