import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SystemEmployee } from 'src/app/models/systemEmploye/systemEmploye';
import { SystemEmployerService } from 'src/app/service/system-employer.service';

@Component({
  selector: 'app-system-employer-update',
  templateUrl: './system-employer-update.component.html',
  styleUrls: ['./system-employer-update.component.css']
})
export class SystemEmployerUpdateComponent implements OnInit {
  user:any
  systemEmployerFirstName:SystemEmployee
  systemEmployerLastName:SystemEmployee
  updateFirstNameForm:FormGroup
  updateLastNameForm:FormGroup
  constructor(private systemEmployerService:SystemEmployerService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createFirstNameUpdateForm()
    this.createLastNameUpdateForm()
    this.getSystemEmployerByIdFirstName()
    this.getSystemEmployerByIdLastName()
    this.getUserById()
  }

  createFirstNameUpdateForm(){
    this.updateFirstNameForm=this.formBuilder.group({
      sysEmplId:[this.getUserById()],
      firstName:["",Validators.required]
    })
  }

  createLastNameUpdateForm(){
    this.updateLastNameForm=this.formBuilder.group({
      sysEmplId:[this.getUserById()],
      lastName:["",Validators.required]
    })
  }

  updateFirstName(){
    this.systemEmployerService.updateFirstName(this.systemEmployerFirstName,this.updateFirstNameForm.value["firstName"]).subscribe((response:any)=>{
      this.toastrService.success('Successfully updated');
      setTimeout(() => {window.location.reload()
        
      }, 1400);
      console.log("Eklendi")
    })
  }

  updateLastName(){
    this.systemEmployerService.updateLastName(this.systemEmployerLastName,this.updateLastNameForm.value["lastName"]).subscribe((response:any)=>{
      this.toastrService.success('Successfully updated');
      setTimeout(() => {window.location.reload()
        
      }, 1400);
      console.log("Eklendi")
    })
  }

  getSystemEmployerByIdFirstName(){
    this.systemEmployerService.getBySystemEmployerId(this.getUserById()).subscribe((response:any)=>{
      this.systemEmployerFirstName=response.data
    })
  }

  getSystemEmployerByIdLastName(){
    this.systemEmployerService.getBySystemEmployerId(this.getUserById()).subscribe((response:any)=>{
      this.systemEmployerLastName=response.data
    })
  }



  getUserById():any{
    this.user=JSON.parse(localStorage.getItem("user"))
    return this.user.data.id
  }
}
