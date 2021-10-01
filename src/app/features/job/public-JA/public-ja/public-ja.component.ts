import { Component, OnInit } from '@angular/core';
import { JobAdvertisement } from 'src/app/models/jobAdvertisements/jobAdvertisements';
import { JobAdvertisementService } from 'src/app/service/job-advertisement.service';

@Component({
  selector: 'app-public-ja',
  templateUrl: './public-ja.component.html',
  styleUrls: ['./public-ja.component.css']
})
export class PublicJaComponent implements OnInit {
  user: any

  activeJobAdvertisement: JobAdvertisement[] = []
  

  constructor(private jobAdvertisementService: JobAdvertisementService, ) { }

  ngOnInit(): void {
    this.getActiveJA()
   
  }

  getActiveJA() {
    this.jobAdvertisementService.getActiveJobAdvertisement().subscribe((response: any) => {
      this.activeJobAdvertisement = response.data
    })
  }
  

 
}
