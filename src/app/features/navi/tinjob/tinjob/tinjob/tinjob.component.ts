import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city/city';
import { Employer } from 'src/app/models/employees/employees';
import { JobAdvertisement } from 'src/app/models/jobAdvertisements/jobAdvertisements';
import { CitiesService } from 'src/app/service/cities.service';
import { EmplooyesService } from 'src/app/service/emplooyes.service';
import { JobAdvertisementService } from 'src/app/service/job-advertisement.service';

@Component({
  selector: 'app-tinjob',
  templateUrl: './tinjob.component.html',
  styleUrls: ['./tinjob.component.css'],
  
})
export class TinjobComponent implements OnInit {
  city:City[]=[]
  activeJobAdvertisement:JobAdvertisement[]=[]
 
  employers:Employer[]=[]
  constructor(private citiesService:CitiesService,
    private jobAdvertisementService:JobAdvertisementService,
    private employerService:EmplooyesService) { }

  ngOnInit(): void {
    this.getCity();
    this.getActiveJA();
    this.getEmployers();
  }
getCity(){
  this.citiesService.getCities().subscribe((response:any)=>{this.city=response.data})
}
getActiveJA(){
  this.jobAdvertisementService.getActiveJobAdvertisement().subscribe((response:any)=>{this.activeJobAdvertisement=response.data
 
  })
}

getEmployers(){
  this.employerService.getEmplooyes().subscribe((response:any)=>{
    this.employers=response.data
    console.log(this.employers)
  })
}
}



  


