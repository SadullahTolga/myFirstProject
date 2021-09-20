import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading-navi',
  templateUrl: './heading-navi.component.html',
  styleUrls: ['./heading-navi.component.css']
})
export class HeadingNaviComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
}
