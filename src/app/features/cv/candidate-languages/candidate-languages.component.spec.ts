import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateLanguagesComponent } from './candidate-languages.component';

describe('CandidateLanguagesComponent', () => {
  let component: CandidateLanguagesComponent;
  let fixture: ComponentFixture<CandidateLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateLanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
