import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerUpdateVerifiedComponent } from './employer-update-verified.component';

describe('EmployerUpdateVerifiedComponent', () => {
  let component: EmployerUpdateVerifiedComponent;
  let fixture: ComponentFixture<EmployerUpdateVerifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerUpdateVerifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerUpdateVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
