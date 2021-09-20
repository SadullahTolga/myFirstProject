import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/"
  apiUrlUser= "https://javareactcamp-hrms-backend.herokuapp.com/api/"
  apiUrlId="https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/get/byId?candId="
  apiUrlLogin="https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/get/"
  constructor(private httpClient:HttpClient) { }

  getCandidate():Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(this.apiUrl+"get/all")
  }
  
  addCandidate(candidate:Candidate):Observable<Candidate>{
    return this.httpClient.post<Candidate>(this.apiUrl+"add",candidate)
  }

  checkCandidateNationalityId(nationalityId:string):Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(this.apiUrl+"exists/byNatId?nationalityId="+nationalityId)
  }
  checkCandidateUserEmail(email:string):Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(this.apiUrl+"users/exists/byEmail?email="+ email)
  }
  getCandidateId(id:number):Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(this.apiUrl+id)

  }
  enterCandidate(candidate:Candidate):Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(this.apiUrlLogin+"byEmailAndPW?email="+candidate.email+"&password="+candidate.password)
  }
  userExistsByLogin(candidate:Candidate):Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(this.apiUrlLogin + "/exists/byEmailAndPW?email="+candidate.email+ "&password="+candidate.password )
  }
}
