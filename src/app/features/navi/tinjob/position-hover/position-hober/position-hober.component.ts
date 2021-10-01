import { Component, OnInit } from '@angular/core';
import { Position } from 'src/app/models/position/position';
import { PositionService } from 'src/app/service/positionService';

@Component({
  selector: 'app-position-hober',
  templateUrl: './position-hober.component.html',
  styleUrls: ['./position-hober.component.css']
})
export class PositionHoberComponent implements OnInit {
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
