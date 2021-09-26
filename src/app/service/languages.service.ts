import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageListResponse } from '../models/language/languageListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  apiUrl: string =
  'https://javareactcamp-hrms-backend.herokuapp.com/api/languages';
constructor(private httpClient: HttpClient) {}

getAll(): Observable<LanguageListResponse> {
  return this.httpClient.get<LanguageListResponse>(this.apiUrl + '/get/all');
}
}