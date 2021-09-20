
import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department/departmen';
import { Position } from 'src/app/models/position/position';
import { PositionService } from 'src/app/service/positionService';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentAddComponent implements OnInit {
  positions: Position[] = []
  totalRecords: number
  page: number = 1
  constructor(private  positionService: PositionService) { }

  ngOnInit(): void {
    this.getDepartment();
  }

  getDepartment() {
    this.positionService.getPosition().subscribe((response:any )=> { this.positions = response.data
      this.totalRecords = response.data.length })
  }

  


}
