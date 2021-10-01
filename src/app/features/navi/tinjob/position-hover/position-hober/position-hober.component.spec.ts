import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionHoberComponent } from './position-hober.component';

describe('PositionHoberComponent', () => {
  let component: PositionHoberComponent;
  let fixture: ComponentFixture<PositionHoberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionHoberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionHoberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
