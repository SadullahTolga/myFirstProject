import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city/city';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  apiUrl:string="https://javareactcamp-hrms-backend.herokuapp.com/api/cities"

  constructor(private httpClient:HttpClient) { }

  getCities():Observable<City[]>{
    return this.httpClient.get<City[]>(this.apiUrl +"/get/all");
  }

}