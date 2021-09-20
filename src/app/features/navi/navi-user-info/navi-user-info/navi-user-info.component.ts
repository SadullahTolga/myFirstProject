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
  
  user:User;
 
  constructor(private route:Router,private toastrService:ToastrService) { }

  ngOnInit(): void {
  }

  getUserInfo():any{
    this.user = JSON.parse(localStorage.getItem("user"))
    
    return this.user;
  }

  signOut(){
    localStorage.clear()
    this.toastrService.error("You quit.")
    this.route.navigate["tinjob"]
  }
 
}