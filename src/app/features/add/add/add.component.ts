
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
  positions: Position[] = []
  addForm: FormGroup
  
  constructor(private positionService: PositionService,
    private toastrService: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.createAddForm();
    this.getPosition();
  }

  createAddForm() {
    this.addForm = this.formBuilder.group({
      title: ["", Validators.required]
    })
  }


  getPosition() {
    this.positionService.getPosition().subscribe((response: any) => {
      this.positions = response.data
    })
  }


  add() {
    if (this.addForm.valid) {
      if (this.checkDuplicate(this.addForm.value)) {
        this.positionService.addPosition(this.addForm.value).subscribe((response) => {
          this.toastrService.success("Succes")
          window.location.reload();
          
        })
      }

    } else {this.toastrService.error("information missing")}
  }

  checkDuplicate(position: Position) {
    let title = this.positions.find(
      (t) => t.title.toLowerCase().trim() === position.title.toLowerCase().trim()
    );

    if (title) {
      this.toastrService.error('This position exists.');
      return false;
    } else {
      return true;
    }
  }
}