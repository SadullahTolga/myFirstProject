import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  apiUrl:string="https://javareactcamp-hrms-backend.herokuapp.com/api/cities"

  constructor(private httpClient:HttpClient) { }

  getCities(){
    return this.httpClient.get(this.apiUrl +"/get/all");
  }

}