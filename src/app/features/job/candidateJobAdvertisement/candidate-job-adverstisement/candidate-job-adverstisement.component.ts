import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { JobAdvertisement } from 'src/app/models/jobAdvertisements/jobAdvertisements';
import { CandidateService } from 'src/app/service/candidate.service';
import { JobAdvertisementService } from 'src/app/service/job-advertisement.service';

@Component({
  selector: 'app-candidate-job-adverstisement',
  templateUrl: './candidate-job-adverstisement.component.html',
  styleUrls: ['./candidate-job-adverstisement.component.css']
})
export class CandidateJobAdverstisementComponent implements OnInit {
  user: any
  candidate: Candidate
  activeJobAdvertisement: JobAdvertisement[] = []

  constructor(private jobAdvertisementService: JobAdvertisementService, private toastrService: ToastrService,
    private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.getActiveJA()
    this.getCandidateById()
    this.getUserById()
  }

  getActiveJA() {
    this.jobAdvertisementService.getActiveJobAdvertisement().subscribe((response: any) => {
      this.activeJobAdvertisement = response.data
    })
  }
  addFavoriteJA(id:number) {
    this.candidateService.addFavoriteJA(this.candidate, id).subscribe((response:any)=>{
      this.toastrService.success("successfully added to favorites")
      setTimeout(() => {
        window.location.reload()

      }, 1400);},((responseError)=>{
        this.toastrService.error("This job advertisement exists in your favorites.")
      }))
  }

  

  getCandidateById(){
    this.candidateService.getCandidateById(this.getUserById()).subscribe((response:any)=>{this.candidate=response.data})
    
  }

  getUserById(): any {
    this.user = JSON.parse(localStorage.getItem("user"))
    return this.user.data.id
  }
}
