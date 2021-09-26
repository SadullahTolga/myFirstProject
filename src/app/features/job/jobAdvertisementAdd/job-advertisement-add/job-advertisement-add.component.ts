
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { City } from 'src/app/models/city/city';
import { Employer } from 'src/app/models/employees/employees';
import { JobAdvertisement } from 'src/app/models/jobAdvertisements/jobAdvertisements';
import { Position } from 'src/app/models/position/position';
import { CitiesService } from 'src/app/service/cities.service';
import { EmplooyesService } from 'src/app/service/emplooyes.service';
import { JobAdvertisementService } from 'src/app/service/job-advertisement.service';
import { PositionService } from 'src/app/service/positionService';

@Component({
  selector: 'app-job-advertisement-add',
  templateUrl: './job-advertisement-add.component.html',
  styleUrls: ['./job-advertisement-add.component.css']
})
export class JobAdvertisementAddComponent implements OnInit {
  jobAdvertisement:JobAdvertisement[]=[]
  positions: Position[] = []
  cities: City[] = []
  employers:Employer[]=[]
  user: any;
  jobAdvertisementForm:FormGroup
  constructor(
    private positionService:PositionService,
    private employerService:EmplooyesService,
    private citiesService:CitiesService,
    private jobAdvertisementService:JobAdvertisementService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.createJobAdvertisementForm()
    this.getJobPositions()
    this.getCities()
    this.getEmployer()
    
   
  }

  getJobAdvertisement(){
    this.jobAdvertisementService.getAllJobAdvertisement().subscribe((response:any)=>this.jobAdvertisement=response.data)
  }

  createJobAdvertisementForm(){
    this.jobAdvertisementForm=this.formBuilder.group({
      cityId:["",Validators.required],
      deadLine:["",Validators.required],
      employerId: [this.getUserId()],
      id:["",Validators.required],
      jobDescription:["",Validators.required],
      maxSalary:[""],
      minSalary:[""],
      openPositions:["",Validators.required],
      positionId:["",Validators.required],
      workModel:["",Validators.required],
      workTime:["",Validators.required]
    })

    }

    addJobAdvertisement(){
      
      this.jobAdvertisementService.addJobAdvertisement(this.jobAdvertisementForm.value).subscribe((response:any)=>{
        this.toastrService.success("Job Advertisement add.")
      }), (responseError) => {
        let message = JSON.stringify(responseError.error.data.errors);
        this.toastrService.error(
          message.replace(/{|}|"/gi, ''), 'Doğrulama Hatası');
      }
    }
    getJobPositions() {
      this.positionService.getPosition().subscribe((data: any) => {
        this.positions = data.data
        
      })
    }
  
    getCities() {
      this.citiesService.getCities().subscribe((data: any) => {
        this.cities = data.data
        console.log(this.cities)
      })
    }
  
  
    getUserId(): any {
      this.user = JSON.parse(localStorage.getItem('user'));
      return this.user.data.id;
    }

    getEmployer(){
     
        this.employerService.getEmplooyes().subscribe((response:any )=> { this.employers = response.data
          })
      }
    

  }

  



