import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemEmployerComponent } from './system-employer.component';

describe('SystemEmployerComponent', () => {
  let component: SystemEmployerComponent;
  let fixture: ComponentFixture<SystemEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
