
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Department } from 'src/app/models/department/departmen';
import { Position } from 'src/app/models/position/position';
import { PositionService } from 'src/app/service/positionService';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  positions:Position[]=[]
  addForm:FormGroup
  checkPosition=false
  constructor(private positionService:PositionService,
    private toastrService:ToastrService,
    private router:Router,
    private formBuilder:FormBuilder,) { }

  ngOnInit(): void {
    this.createAddForm()
    this.getPosition
  }

  getPosition() {
    this.positionService.getPosition().subscribe((response:any )=> { this.positions = response.data
      })
  }

  createAddForm(){
    this.addForm=this.formBuilder.group({
      name:["",Validators.required]
    })
  }

  add(){
    if(this.addForm.valid){
      if(!this.checkDuplicatePosition(this.addForm.value)){
        this.positionService.addPosition(this.addForm.value).subscribe((response: any) => {
          this.toastrService.success(response.message, "Succes")
        })
      } 

    }else{this.toastrService.error("information is missing")}
  }

  checkDuplicatePosition(position:Position){
    let item = this.positions.find((t)=>t.title.toLocaleLowerCase().trim===position.title.toLocaleLowerCase().trim)
   if(item){
this.toastrService.error("This position exists")
return false
   }else{
     return true
   }
  }}