import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnverifiedJAComponent } from './unverified-ja.component';

describe('UnverifiedJAComponent', () => {
  let component: UnverifiedJAComponent;
  let fixture: ComponentFixture<UnverifiedJAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnverifiedJAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnverifiedJAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
