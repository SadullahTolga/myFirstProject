import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city/city';
import { JobAdvertisement } from 'src/app/models/jobAdvertisements/jobAdvertisements';
import { CitiesService } from 'src/app/service/cities.service';
import { JobAdvertisementService } from 'src/app/service/job-advertisement.service';

@Component({
  selector: 'app-tinjob',
  templateUrl: './tinjob.component.html',
  styleUrls: ['./tinjob.component.css']
})
export class TinjobComponent implements OnInit {
  city:City[]=[]
  activeJobAdvertisement:JobAdvertisement[]=[]
  constructor(private citiesService:CitiesService,private jobAdvertisementService:JobAdvertisementService) { }

  ngOnInit(): void {
    this.getCity();
    this.getActiveJA()
  }
getCity(){
  this.citiesService.getCities().subscribe((response:any)=>{this.city=response.data})
}
getActiveJA(){
  this.jobAdvertisementService.getActiveJobAdvertisement().subscribe((response:any)=>{this.activeJobAdvertisement=response.data
  })
}
}



  


