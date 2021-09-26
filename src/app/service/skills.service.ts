import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill/skill';
import { SkillListResponse } from '../models/skill/skillListResponse';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/skills/"
  constructor(private httpClient:HttpClient) { }

  getSkills():Observable<SkillListResponse>{
    return this.httpClient.get<SkillListResponse>(this.apiUrl+"get/all")
  }
}
