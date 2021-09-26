import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateJobAdverstisementComponent } from './candidate-job-adverstisement.component';

describe('CandidateJobAdverstisementComponent', () => {
  let component: CandidateJobAdverstisementComponent;
  let fixture: ComponentFixture<CandidateJobAdverstisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateJobAdverstisementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateJobAdverstisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
