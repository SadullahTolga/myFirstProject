import { HttpClient } from '@angular/common/http';
import { Position } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  apiGetUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/positions/get/all"
  apiAddUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/positions/add?positionTitle="
  constructor(private httpClient:HttpClient) { }

  getPosition():Observable<Position[]>{
    return this.httpClient.get<Position[]>(this.apiGetUrl)

  }

  addPosition(positionName:Position):Observable<Position[]>{
    return this.httpClient.post<Position[]>(this.apiAddUrl,positionName)
  }
  checkPosition(positionName:string):Observable<Position[]>{
    return this.httpClient.get<Position[]>(this.apiAddUrl+positionName)
  }

}
