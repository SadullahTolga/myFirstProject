import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemEmployerUpdateComponent } from './system-employer-update.component';

describe('SystemEmployerUpdateComponent', () => {
  let component: SystemEmployerUpdateComponent;
  let fixture: ComponentFixture<SystemEmployerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemEmployerUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemEmployerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
