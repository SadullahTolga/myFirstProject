import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate/candidate';
import { CandidateListResponse } from '../models/candidate/candidateListResponse';
import { JobAdvertisement } from '../models/jobAdvertisements/jobAdvertisements';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
 apiUrl: string =
    'https://javareactcamp-hrms-backend.herokuapp.com/api/candidates';
  constructor(private httpClient: HttpClient) {}

  addCandidate(candidate: Candidate): Observable<Candidate> {
    return this.httpClient.post<Candidate>(this.apiUrl + '/add', candidate);
  }

  getAll(): Observable<CandidateListResponse> {
    return this.httpClient.get<CandidateListResponse>(this.apiUrl + '/get/all');
  }

  getCandidateById(id: number): Observable<CandidateListResponse> {
    return this.httpClient.get<CandidateListResponse>( this.apiUrl + '/get/byId?candId=' + id
    );
  }

  updateGitHub(id:number ,gitHub:string):Observable<Candidate>{
    return this.httpClient.put<Candidate>(this.apiUrl+"/update/githubAccount?candId="+id+"&githubAccount="+gitHub,gitHub)
  }
  updateLinkedIn(id:number,linkedin:string):Observable<Candidate>{
    return this.httpClient.put<Candidate>(this.apiUrl+"/update/linkedinAccount?candId="+id+"&linkedinAccount="+linkedin,linkedin)
  }
  addFavoriteJA(candidate:Candidate,jobAdvertisement:number):Observable<JobAdvertisement>{
    return this.httpClient.put<JobAdvertisement>(this.apiUrl+"/update/favoriteJobAdvs/add?candId="+candidate.id+"&jobAdvId="+jobAdvertisement,candidate)
  }
  removeFavoriteJA(candidate:Candidate,jobAdvertisement:number):Observable<JobAdvertisement>{
    return this.httpClient.put<JobAdvertisement>(this.apiUrl+"/update/favoriteJobAdvs/remove?candId="+candidate.id+"&jobAdvId="+jobAdvertisement,candidate)
  }
}
