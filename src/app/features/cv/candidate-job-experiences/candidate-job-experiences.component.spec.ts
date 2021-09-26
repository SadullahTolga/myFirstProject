import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateJobExperiencesComponent } from './candidate-job-experiences.component';

describe('CandidateJobExperiencesComponent', () => {
  let component: CandidateJobExperiencesComponent;
  let fixture: ComponentFixture<CandidateJobExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateJobExperiencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateJobExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
