import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employer } from 'src/app/models/employees/employees';
import { EmplooyesService } from 'src/app/service/emplooyes.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employer[] = []
  constructor(private employeesService: EmplooyesService , private activatedRoute:ActivatedRoute) { }
  totalRecords: number
  page: number = 1
  ngOnInit(): void {
   
    this.getEmployees();
  }
  getEmployees() {
    this.employeesService.getEmplooyes().subscribe((response:any )=> { this.employees = response.data
      this.totalRecords = response.data.length })
  }
  getEmplooyesById(id:number){
    this.employeesService.getEmplooyesId(id).subscribe((data:any) => {this.employees= data.data}
    )
  }
}
