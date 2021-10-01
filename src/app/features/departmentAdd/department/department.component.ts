
import { Component, OnInit } from '@angular/core';

import { Position } from 'src/app/models/position/position';
import { PositionService } from 'src/app/service/positionService';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentAddComponent implements OnInit {
  positions: Position[] = []

  constructor(private  positionService: PositionService) { }

  ngOnInit(): void {
    this.getPositions();
  }

  getPositions() {
    this.positionService.getPosition().subscribe((response:any )=> { this.positions = response.data
       })
  }

  


}
