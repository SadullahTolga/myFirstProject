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

  getUnverified():Observable<Employer[]>{
    return this.httpClient.get<Employer[]>(this.apiUrl+"get/unverified")
  }

  addEmplooyes(emplooyesId: Employer): Observable<Employer> {
    return this.httpClient.post<Employer>(this.apiUrl+"add" , emplooyesId)
  }
  getEmplooyesId(id:number):Observable<Employer[]>{
    return  this.httpClient.get<Employer[]>(this.apiUrl+"get/byId?emplId="+id)
  }

  checkEmployeeUserEmail(email:string):Observable<Employer[]>{
    return this.httpClient.get<Employer[]>(this.apiUrl+"users/exists/byEmail?email="+ email)
  }

  applyUpdate(employer:Employer):Observable<Employer>{
    return this.httpClient.put<Employer>(this.apiUrl+"update/applyChanges?emplId="+employer.id,employer)
  }

  updateCompanyName(employer:Employer,companyName:string):Observable<Employer>{
    return this.httpClient.put<Employer>
    (this.apiUrl+"update/companyName?companyName="+companyName+"&emplId="+employer.id,employer)
  }

  updateEmailAndWebsite(employer:Employer,email:string,website:string):Observable<Employer>{
    return this.httpClient.put<Employer>
    (this.apiUrl+"update/emailAndWebsite?email="+email+"&emplId="+employer.id+"&website="+website,employer)
  }
  updatePhoneNumber(employer:Employer,phoneNumber:string):Observable<Employer>{
    return this.httpClient.put<Employer>
    (this.apiUrl+"update/phoneNumber?emplId="+employer.id+"&phoneNumber="+phoneNumber,employer)
  }

  
}
