import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from '../models/school/school';
import { SchoolListResponse } from '../models/school/schoolListResponse';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/schools/"

  constructor(private httpClient:HttpClient) { }

  getAllSchools():Observable<SchoolListResponse[]>{
    return this.httpClient.get<SchoolListResponse[]>(this.apiUrl+"get/all")
  }
  
  
}
