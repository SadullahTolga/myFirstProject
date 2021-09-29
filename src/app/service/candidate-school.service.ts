import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateSchool } from '../models/candidate/candidate-school/candidate-school';
import { School } from '../models/school/school';

@Injectable({
  providedIn: 'root'
})
export class CandidateSchoolService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSchools"
  add(candidateSchool: School): Observable<School> {
    return this.httpClient.post<School>(this.apiUrl+"/add" , candidateSchool);
  }
  removeSchool(schoolId:number):Observable<CandidateSchool>{
    return this.httpClient.delete<CandidateSchool>(this.apiUrl+"/delete/byId?candSchId="+schoolId)
  }
}
