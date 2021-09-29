import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemEmployee } from '../models/systemEmploye/systemEmploye';

@Injectable({
  providedIn: 'root'
})
export class SystemEmployerService {
  apiUrl = "https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/"
  constructor(private httpClient: HttpClient) { }

  getAllSystemEmployers(): Observable<SystemEmployee[]> {
    return this.httpClient.get<SystemEmployee[]>(this.apiUrl + "get/all")
  }

  addSystemEmployer(systemEmploye:SystemEmployee): Observable<SystemEmployee> {
    return this.httpClient.post<SystemEmployee>(this.apiUrl + "add",systemEmploye)
  }

  getBySystemEmployerId(id:number):Observable<SystemEmployee>{
    return this.httpClient.get<SystemEmployee>(this.apiUrl+"get/byId?sysEmplId="+id)
  }
}
