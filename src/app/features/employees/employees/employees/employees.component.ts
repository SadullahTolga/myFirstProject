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

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["id"]) {
        this.getEmplooyesById(params["id"])
      } else {
        this.getEmployees();
      }
    })
  }
  getEmployees() {
    this.employeesService.getEmplooyes().subscribe(data => this.employees = data)
  }
  getEmplooyesById(id:number){
    this.employeesService.getEmplooyesId(id).subscribe(data => this.employees= data)
  }
}
