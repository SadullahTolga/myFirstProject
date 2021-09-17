import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/models/candidate/candidate';
import { CandidateService } from 'src/app/service/candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  candidates:Candidate[]=[]
  constructor(private candidateService:CandidateService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["id"]) {
        this.getCandicateById(params["id"])
      } else {
        this.getCandidate();
      }
    })
  }

  getCandidate(){
    this.candidateService.getCandidate().subscribe(data=>this.candidates=data)
  }
  getCandicateById(id:number){
    this.candidateService.getCandidateId(id).subscribe(data => this.candidates= data)
  }
}
