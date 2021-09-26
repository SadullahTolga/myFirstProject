import { Component, OnInit } from '@angular/core';
import { JobAdvertisement } from 'src/app/models/jobAdvertisements/jobAdvertisements';
import { JobAdvertisementService } from 'src/app/service/job-advertisement.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  user:any;
  companyName: any;
  employerJobs: JobAdvertisement[] = [];
  constructor(private jobAdvertisementService: JobAdvertisementService) {}

  ngOnInit(): void {
    this.getJobsByEmployer();
    this.getCompanyName();
  }

  getJobsByEmployer() {
    this.jobAdvertisementService
      .getJobsByEmployer(this.getUserId())
      .subscribe((response: any) => {
        this.employerJobs = response.data;
        console.log(this.employerJobs)
      });
  }

  passiveJA(job:JobAdvertisement) {
    this.jobAdvertisementService
      .passiveJA(job)
      .subscribe((response: any) => {
        window.location.reload();
        console.log(response)
      });
  }

  getUserId(): number {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user.data.id;
  }

  getCompanyName() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.companyName = this.user.data.companyName;
  }
}