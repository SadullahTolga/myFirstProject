import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department/departmen';
import { School } from 'src/app/models/school/school';
import { DepartmentService } from 'src/app/service/department.service';
import { SchoolService } from 'src/app/service/school.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  schools:School[]=[]
  departments:Department[]=[]
  constructor(private schoolService:SchoolService,private departmentService:DepartmentService) { }

  ngOnInit(): void {
    this.getAllSchool()
    this.departmentGetAll()
  }

  departmentGetAll() {
    this.departmentService.getDepartment().subscribe((response: any) => {this.departments = response.data})
  }
  getAllSchool() {
    this.schoolService.getAllSchools().subscribe((response: any) => {this.schools = response.data})
  }
}
