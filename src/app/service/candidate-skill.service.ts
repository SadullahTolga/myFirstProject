import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateSkill } from '../models/candidate/candidate-skill/candidate-skill';
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

  removeSkill(skillId:number):Observable<CandidateSkill>{
    return this.httpClient.delete<CandidateSkill>(this.apiUrl+"/delete/byId?candSkillId="+skillId)

  }
}
