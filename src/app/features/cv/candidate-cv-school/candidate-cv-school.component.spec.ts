import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCvSchoolComponent } from './candidate-cv-school.component';

describe('CandidateCvSchoolComponent', () => {
  let component: CandidateCvSchoolComponent;
  let fixture: ComponentFixture<CandidateCvSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateCvSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateCvSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
