import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-navi-user-info',
  templateUrl: './navi-user-info.component.html',
  styleUrls: ['./navi-user-info.component.css']
})
export class NaviUserInfoComponent implements OnInit {
  
  user:any;
  loggedUser:any
  
 

  constructor(private route:Router,
    private toastrService:ToastrService,
   ) { }

  ngOnInit(): void {
    this.getUserInfo()
    
   

  }
  getUserInfo():any{
    this.user = JSON.parse(localStorage.getItem("user"))
    this.loggedUser=this.user.data
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


 signOut(){
  localStorage.clear()
  this.toastrService.error("You quit.")
  this.route.navigate["tinjob"]
}




  
}

