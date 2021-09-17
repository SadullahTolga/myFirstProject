import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingNaviComponent } from './heading-navi.component';

describe('HeadingNaviComponent', () => {
  let component: HeadingNaviComponent;
  let fixture: ComponentFixture<HeadingNaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingNaviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
