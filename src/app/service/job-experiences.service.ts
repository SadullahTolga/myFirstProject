import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateJobExperience } from '../models/candidate-job-experience/candidate-job-experience';
import { CandidateJobExperienceListResponse } from '../models/candidate-job-experience/candidate-job-experienceListResponse';
import { Candidate } from '../models/candidate/candidate';
import { CandidateListResponse } from '../models/candidate/candidateListResponse';

@Injectable({
  providedIn: 'root'
})
export class JobExperiencesService {
  apiUrl: string =
  'https://javareactcamp-hrms-backend.herokuapp.com/api/candidateJobExperiences';
constructor(private httpClient: HttpClient) {}



getAll(candidate:Candidate):Observable<CandidateJobExperience[]>{
  return this.httpClient.get<CandidateJobExperience[]>(this.apiUrl+"/get/all")
}
add(
  candidateJobExperience: CandidateJobExperience
): Observable<CandidateJobExperience> {
  return this.httpClient.post<CandidateJobExperience>(
    this.apiUrl + '/add',
    candidateJobExperience
  );
}
}