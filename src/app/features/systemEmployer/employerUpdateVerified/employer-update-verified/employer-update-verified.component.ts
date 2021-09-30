import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employer } from 'src/app/models/employees/employees';
import { EmplooyesService } from 'src/app/service/emplooyes.service';

@Component({
  selector: 'app-employer-update-verified',
  templateUrl: './employer-update-verified.component.html',
  styleUrls: ['./employer-update-verified.component.css']
})
export class EmployerUpdateVerifiedComponent implements OnInit {
  unverifiedEmployers: Employer[] = [];
  constructor(private employerService:EmplooyesService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getUnverifiedEmployers()
  }
  getUnverifiedEmployers() {
    this.employerService.getEmplooyes().subscribe((response: any) => {
      response.data = response.data.filter((r) => r.updateVerified === false);
      this.unverifiedEmployers = response.data;
     
    });
  }

  changeVerification(employer: Employer) {
    this.employerService
      .applyUpdate(employer)
      .subscribe((response: any) => {
        this.toastrService.success('Verification changed successfully.');
        setTimeout(() => {
          window.location.reload()

        }, 1400);
      });
  }

}
