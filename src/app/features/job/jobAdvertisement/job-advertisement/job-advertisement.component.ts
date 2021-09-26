import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/jobAdvertisements/jobAdvertisements';
import { JobAdvertisementService } from 'src/app/service/job-advertisement.service';

@Component({
  selector: 'app-job-advertisement',
  templateUrl: './job-advertisement.component.html',
  styleUrls: ['./job-advertisement.component.css']
})
export class JobAdvertisementComponent implements OnInit {
  
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
