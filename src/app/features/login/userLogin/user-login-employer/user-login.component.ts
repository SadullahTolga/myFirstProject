import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employer } from 'src/app/models/employees/employees';
import { User } from 'src/app/models/user/user';
import { EmplooyesService } from 'src/app/service/emplooyes.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  emplooyes:Employer[]=[]
  loginForm:FormGroup
  constructor(private emplooyesService:EmplooyesService , 
    private toastrService:ToastrService,
    private router:Router,
    private formBuilder:FormBuilder,
    private userService:UserService) { }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      password:["",Validators.required]

    })
  }

  login(){
    
  
    let user: User = this.loginForm.value;

    this.userService.enterEmploye(user).subscribe(
      (response:any) => {
        this.toastrService.success('Sisteme giriş yapıldı.');
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate["tinjob"]
        
      },
      (responseError) => {
        let message = JSON.stringify(responseError.error.message);
        this.toastrService.error(
          message.replace(/{|}|"/gi, ''),
          'Doğrulama hatası'
        );
      }
    );
    
     
   
   
  

  
}}
