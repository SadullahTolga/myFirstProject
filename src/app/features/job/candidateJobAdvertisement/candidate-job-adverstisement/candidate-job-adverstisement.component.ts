import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/jobAdvertisements/jobAdvertisements';
import { JobAdvertisementService } from 'src/app/service/job-advertisement.service';

@Component({
  selector: 'app-candidate-job-adverstisement',
  templateUrl: './candidate-job-adverstisement.component.html',
  styleUrls: ['./candidate-job-adverstisement.component.css']
})
export class CandidateJobAdverstisementComponent implements OnInit {


  activeJobAdvertisement:JobAdvertisement[]=[]
  
  constructor(private jobAdvertisementService:JobAdvertisementService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getActiveJA()
  }

  getActiveJA(){
    this.jobAdvertisementService.getActiveJobAdvertisement().subscribe((response:any)=>{this.activeJobAdvertisement=response.data
    })
  }

  passiveJA(jobAdvertisement:JobAdvertisement){
    this.jobAdvertisementService.passiveJA(jobAdvertisement).subscribe((response:any) => {
     this.toastrService.error("Deleted")
      window.location.reload()
      
  })

 
  
}}
