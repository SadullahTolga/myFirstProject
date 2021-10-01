import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicJaComponent } from './public-ja.component';

describe('PublicJaComponent', () => {
  let component: PublicJaComponent;
  let fixture: ComponentFixture<PublicJaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicJaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicJaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
