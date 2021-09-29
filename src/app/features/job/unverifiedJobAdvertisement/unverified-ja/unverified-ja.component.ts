import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/jobAdvertisements/jobAdvertisements';
import { JobAdvertisementService } from 'src/app/service/job-advertisement.service';

@Component({
  selector: 'app-unverified-ja',
  templateUrl: './unverified-ja.component.html',
  styleUrls: ['./unverified-ja.component.css']
})
export class UnverifiedJAComponent implements OnInit {

  constructor(private jobAdvertisementService:JobAdvertisementService,private toastrService:ToastrService) { }
  unverifiedJA:JobAdvertisement[]=[]
  ngOnInit(): void {
    this.getUnverifiedJA();
  }

  getUnverifiedJA(){
    this.jobAdvertisementService.getUnverifiedJA(1).subscribe((response:any)=>this.unverifiedJA=response.data) 
  }

  changeUnverifiedJA(jobAdvertisement:JobAdvertisement){
    this.jobAdvertisementService.changeUnverifiedJA(jobAdvertisement).subscribe((response:any)=>{this.toastrService.success("Success")
    setTimeout(() => {window.location.reload()
        
    }, 1400);})
  }
}
