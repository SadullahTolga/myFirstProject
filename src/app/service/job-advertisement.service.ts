import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobAdvertisementListResponse } from '../models/jobAdvertisements/jobAdvertisementListResponse';
import { JobAdvertisement } from '../models/jobAdvertisements/jobAdvertisements';

@Injectable({
  providedIn: 'root'
})
export class JobAdvertisementService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/"

  getAllJobAdvertisement(): Observable<JobAdvertisementListResponse> {
    return this.httpClient.get<JobAdvertisementListResponse>(this.apiUrl + "get/all")
  }

  addJobAdvertisement(jobAdvertisements: JobAdvertisement): Observable<JobAdvertisement> {
    return this.httpClient.post<JobAdvertisement>(this.apiUrl + "add", jobAdvertisements)
  }

  getActiveJobAdvertisement(): Observable<JobAdvertisement[]> {
    return this.httpClient.get<JobAdvertisement[]>(this.apiUrl + "get/active")
  }
  getJobsByEmployer(
    employerId: number
  ): Observable<JobAdvertisementListResponse> {
    return this.httpClient.get<JobAdvertisementListResponse>(
      this.apiUrl + 'get/byEmployer?employerId=' + employerId
    );
  }

  getJobById(jobAdvId: number): Observable<JobAdvertisementListResponse> {
    return this.httpClient.get<JobAdvertisementListResponse>(
      this.apiUrl + 'get/byId?jobAdvId=' + jobAdvId
    );
  }

  getByCreatedAt(id:number): Observable<JobAdvertisementListResponse> {
    return this.httpClient.get<JobAdvertisementListResponse>(
      this.apiUrl + '/get/activeVerifiedByCreatedAt?sortDirection=' + id
    );
  }

  passiveJA(jobAdvertisement: JobAdvertisement): Observable<JobAdvertisement> {
    return this.httpClient.put<JobAdvertisement>(this.apiUrl + "update/activation?jobAdvId=" + jobAdvertisement.id +
      '&status=' +
      !jobAdvertisement.active,
      jobAdvertisement)
  }

  getUnverifiedJA(id:number):Observable<JobAdvertisementListResponse>{
    return this.httpClient.get<JobAdvertisementListResponse>(this.apiUrl+"get/unverified?sortDirection="+id)
  }

  changeUnverifiedJA(jobAdvertisement:JobAdvertisement):Observable<JobAdvertisement>{
    return this.httpClient.put<JobAdvertisement>(this.apiUrl+"update/verification?jobAdvId="+jobAdvertisement.id+
    "&status="+!jobAdvertisement.verified,jobAdvertisement)

  }
}
