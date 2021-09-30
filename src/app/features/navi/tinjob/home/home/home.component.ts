import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { User } from 'src/app/models/user/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:User;
 
 
  constructor(private route:Router,private toastrService:ToastrService,
   ) { }

  ngOnInit(): void {
    this.getUserInfo()
  }
  getUserInfo():any{
    this.user = JSON.parse(localStorage.getItem("user"))
    
    return this.user;
  }

  checkUser():boolean{
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  }

  checkEmployer(): boolean {
    if (this.checkUser()) {
      let user = JSON.parse(localStorage.getItem('user'));
      let role = user.message;
      if (role.includes('employer')) {
         
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  checkCandidate(): boolean {
    if (this.checkUser()) {
      let user = JSON.parse(localStorage.getItem('user'));
      let role = user.message;
      if (role.includes('candidate')) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  checkSystemEmployer(): boolean {
   if (this.checkUser()) {
     let user = JSON.parse(localStorage.getItem('user'));
     let role = user.message;
     if (role.includes('systemEmployee')) {
        
       return true;
     } else {
       return false;
     }
   } else {
     return false;
   }
 }
  
}
