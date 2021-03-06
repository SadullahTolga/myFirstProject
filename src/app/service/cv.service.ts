import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cv } from '../models/cv/cv';
import { CvListResponse } from '../models/cv/cvListResponse';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/cvs/"
  constructor(private httpClient:HttpClient) { }

  cvAdd(cv:Cv):Observable<Cv>{
    return this.httpClient.post<Cv>(this.apiUrl + "add", cv)

  }

  getCvById(id: number): Observable<CvListResponse> {
    return this.httpClient.get<CvListResponse>(this.apiUrl + '/get/byId?cvId=' + id);
  }
  coverLetterUpdate(cv: Cv, coverLetter: string): Observable<Cv> {
    return this.httpClient.put<Cv>(
      this.apiUrl +
        '/update/coverLetter?coverLetter=' +
        coverLetter +
        '&cvId=' +
        cv.id,
      cv
    );
  }

  titleUpdate(cv:Cv ,title:string):Observable<Cv>{
    return this.httpClient.put<Cv>(this.apiUrl+"/update/title?cvId="+cv.id+"&title="+title,cv)
  }

}
