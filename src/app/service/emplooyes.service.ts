import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employer } from '../models/employees/employees';

@Injectable({
  providedIn: 'root'
})
export class EmplooyesService {
  apiUrl = "https://javareactcamp-hrms-backend.herokuapp.com/api/employers/"
  
 
  constructor(private httpClient: HttpClient) { }

  getEmplooyes(): Observable<Employer[]> {
    return this.httpClient.get<Employer[]>(this.apiUrl+"get/all")

  }

  addEmplooyes(emplooyesId: Employer): Observable<Employer[]> {
    return this.httpClient.post<Employer[]>(this.apiUrl+"add" , emplooyesId)
  }
  getEmplooyesId(id:number):Observable<Employer[]>{
    return  this.httpClient.get<Employer[]>(this.apiUrl+"get/byId?emplId="+id)
  }

  checkEmployeeUserEmail(email:string):Observable<Employer[]>{
    return this.httpClient.get<Employer[]>(this.apiUrl+"users/exists/byEmail?email="+ email)
  }
  
}
