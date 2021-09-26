import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from '../models/school/school';

@Injectable({
  providedIn: 'root'
})
export class CandidateSchoolService {

  constructor(private httpClient:HttpClient) { }
  apiUrlAdd="https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSchools/add"
  add(candidateSchool: School): Observable<School> {
    return this.httpClient.post<School>(this.apiUrlAdd , candidateSchool);
  }
}
