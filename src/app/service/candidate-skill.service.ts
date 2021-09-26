import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill/skill';

@Injectable({
  providedIn: 'root'
})
export class CandidateSkillService {

  constructor(private httpClient:HttpClient) { }
  apiUrl: string =
    'https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSkills';
  addSkill(candidateSkill:Skill):Observable<Skill>{
    return this.httpClient.post<Skill>(this.apiUrl+"/add",candidateSkill)
  }
}
