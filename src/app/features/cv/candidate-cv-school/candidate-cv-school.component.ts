import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Department } from 'src/app/models/department/departmen';
import { School } from 'src/app/models/school/school';
import { CandidateSchoolService } from 'src/app/service/candidate-school.service';
import { CandidateService } from 'src/app/service/candidate.service';
import { DepartmentService } from 'src/app/service/department.service';
import { SchoolService } from 'src/app/service/school.service';

@Component({
  selector: 'app-candidate-cv-school',
  templateUrl: './candidate-cv-school.component.html',
  styleUrls: ['./candidate-cv-school.component.css']
})
export class CandidateCvSchoolComponent implements OnInit {
  candidateSchoolForm: FormGroup
  schools: School[] = []
  departments: Department[] = []
  candidateSchool:School[]=[]
  user : any
  constructor(private formBuilder: FormBuilder,
    private candidateService:CandidateService,
    private candidateSchoolService: CandidateSchoolService,
    private departmentService: DepartmentService,
    private toastrService: ToastrService,
    private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.createSchoolForm();
    this.getAllSchool();
    this.departmentGetAll();
    this.getCandidateSchool();
  }
  createSchoolForm() {
    this.candidateSchoolForm = this.formBuilder.group({
      candidateId:[this.getUserId()],
      schoolId: ["", Validators.required],
      departmentId: ["", Validators.required],
      graduationYear: [""],
      startYear: ["",Validators.required],
    })
  }

  getAllSchool() {
    this.schoolService.getAllSchools().subscribe((response: any) => {this.schools = response.data})
  }
 

  departmentGetAll() {
    this.departmentService.getDepartment().subscribe((response: any) => {this.departments = response.data})
  }

  getCandidateSchool(){
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response:any)=>
    {this.candidateSchool=response.data.candidateSchools})
  }
  getUserId():any{
    this.user=JSON.parse(localStorage.getItem("user"))
    return this.user.data.id
  }

  add(){
    if (this.candidateSchoolForm.valid) {
      this.candidateSchoolService.add(this.candidateSchoolForm.value).subscribe((data: any) => {
        this.toastrService.success(data.message, "Succes")
        window.location.reload();
        console.log("Eklendi")
        
      })
    } else {
      this.toastrService.error("Please chose your information")
    }  }
}
