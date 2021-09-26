import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/department/departmen';
import { DepartmentListResponse } from '../models/department/departmentListResponse';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/departments/"
  constructor(private httpClient:HttpClient) { }

  getDepartment():Observable<DepartmentListResponse[]>{
    return this.httpClient.get<DepartmentListResponse[]>(this.apiUrl+"get/all")
  }

  addDepartment(departmentName:string):Observable<Department>{
    return this.httpClient.post<Department>(this.apiUrl+"add?departmentName=",departmentName)
  }
}
