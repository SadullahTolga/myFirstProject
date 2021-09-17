import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employer } from '../models/employees/employees';

@Injectable({
  providedIn: 'root'
})
export class EmplooyesService {
  apiUrl = "https://javareactcamp-hrms-backend.herokuapp.com/api/employers/get/all"
  apiUrlAdd = "https://javareactcamp-hrms-backend.herokuapp.com/api/employers/add"
  apiUrlGetId="https://javareactcamp-hrms-backend.herokuapp.com/api/employers/get/byId?emplId="
  constructor(private httpClient: HttpClient) { }

  getEmplooyes(): Observable<Employer[]> {
    return this.httpClient.get<Employer[]>(this.apiUrl)

  }

  addEmplooyes(emplooyesId: Employer): Observable<Employer[]> {
    return this.httpClient.post<Employer[]>(this.apiUrl , emplooyesId)
  }
  getEmplooyesId(id:number):Observable<Employer[]>{
    return  this.httpClient.get<Employer[]>(this.apiUrlGetId+id)
  }

  checkEmployeeUserEmail(email:string):Observable<Employer[]>{
    return this.httpClient.get<Employer[]>(this.apiUrl+"users/exists/byEmail?email="+ email)
  }
}
