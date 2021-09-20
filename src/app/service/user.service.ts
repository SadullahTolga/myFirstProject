import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employer } from '../models/employees/employees';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginEmplooyesApi="https://javareactcamp-hrms-backend.herokuapp.com/api/users"
  constructor(private httpClient:HttpClient) { }

  enterEmploye(user:User):Observable<User>{
    return this.httpClient.get<User>(this.loginEmplooyesApi+"/login?email="+user.email+"&password="+user.password)
  }
  
}
