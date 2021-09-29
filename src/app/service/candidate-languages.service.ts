import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateLanguage } from '../models/candidate/candidate-languages/candidate-languages';
import { Language } from '../models/language/language';

@Injectable({
  providedIn: 'root'
})
export class CandidateLanguagesService {
  apiUrl: string =
  'https://javareactcamp-hrms-backend.herokuapp.com/api/candidateLanguages';
constructor(private httpClient: HttpClient) {}



add(candidateLanguage: Language): Observable<Language> {
  return this.httpClient.post<Language>(
    this.apiUrl + '/add',
    candidateLanguage
  );
}

removeLanguage(languageId:number):Observable<CandidateLanguage>{
  return this.httpClient.delete<CandidateLanguage>(this.apiUrl+"/delete/byId?CandLangId="+languageId)
}
}