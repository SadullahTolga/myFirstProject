import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { City } from 'src/app/models/city/city';
import { JobAdvertisement } from 'src/app/models/jobAdvertisements/jobAdvertisements';
import { User } from 'src/app/models/user/user';
import { CitiesService } from 'src/app/service/cities.service';
import { JobAdvertisementService } from 'src/app/service/job-advertisement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:User;
  city:City[]=[]
  activeJobAdvertisement:JobAdvertisement[]=[]
 
  constructor(private route:Router,private toastrService:ToastrService,
    private citiesService:CitiesService,
    private jobAdvertisementService:JobAdvertisementService) { }

  ngOnInit(): void {
    this.getCity();
    this.getActiveJA()
  }

  getUserInfo():any{
    this.user = JSON.parse(localStorage.getItem("user"))
    
    return this.user;
  }
  getCity(){
    this.citiesService.getCities().subscribe((response:any)=>{this.city=response.data})
  }
  getActiveJA(){
    this.jobAdvertisementService.getActiveJobAdvertisement().subscribe((response:any)=>{this.activeJobAdvertisement=response.data
    })
  }
}
